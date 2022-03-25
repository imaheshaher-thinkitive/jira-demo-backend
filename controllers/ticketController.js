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
    if(data.users){
        delete data.users
        updateData={
             $addToSet:{users:data.users} // insert id if not exist 
            
        }
    }
    updateData={...updateData,...data}
    
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

module.exports.getTicketsByUser = async(req,res) =>{
    let userId = req.body.user
    let queryData = {
        users:{$in:userId}
    }
    const ticketData = await getAllData(ticketModel,queryData)
    return res.json({
        "status":true,
        "message":"Ticket listed successfully",
        "data":ticketData
    })
}

module.exports.getTicketsByProject = async(req,res)=>{
    let projectId = req.body.project_id
    const ticketData = await getAllData(ticketModel,{project_id:projectId})
    return res.json({
        "status":true,
        "message":"Ticket listed successfully",
        "data":ticketData
    })
}