const ticketModel = require("../models/ticketModel")
const crypto = require("crypto")
const { getAllData, insertOrUpdate } = require("../lib/queryHelper")
module.exports.createTicket = async(req,res)=>{
    const data = req.body
    let ticketData = new ticketModel(data)
    ticketData["ticket_id"]=crypto.randomBytes(4).toString("hex")
    ticketData.save((err,result) =>{
        if(!err){
            return res.json({
                "status":true,
                "message":"Ticket created successfully",
                "data":result
            })
        }
        else {
            return res.json({
                "status":false,
                "message":err,
                "data":{}
            })
        }
    })
}

module.exports.updateTicket = async(req,res) =>{
    let id = req.body.id
    const data = req.body
    let updateData={}
    if(data.user){
        updateData={
            $push:{users:data.user}
        }
    }
    const ticketData = await insertOrUpdate(ticketModel,{_id:id},updateData)
    if(ticketData){
        return res.json({
            "status":true,
            "message":"Ticket updated successfully",
            "data":ticketData
        })
    }
    else {
        return res.json({
            "status":false,
            "message":"Ticket not found",
            "data":{}
        })
    }
}

module.exports.getTickets = async(req,res)=>{
    const ticketData = await getAllData(ticketModel)
    return res.json({
        "status":true,
        "messgae":"Ticket listed succssfully",
        "data":ticketData
    })
}