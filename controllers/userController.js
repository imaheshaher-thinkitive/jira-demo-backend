const { getData, getAllData } = require("../lib/queryHelper");
const userModel = require("../models/userModel");

module.exports.signUp = async(req,res) =>{
    const data = req.body
    let userData = new userModel(data);
    userData.save((err, result) => {
      if (!err) {
          res.status(201)
        return res.json({
          status: true,
          message: "User created successfully",
          data: result,
        });
      } else {
        return res.json({
          status: false,
          message: err.message,
          data: {},
        });
      }
    });   
}

module.exports.getUserById = async(req,res)=>{
    let  id=req.body.id
    const userData = await getData(userModel,{_id:id})
    return res.json({
        "status":true,
        "message":"User detailed successfully",
        "data":userData
    })
}

module.exports.getAllUser = async(req,res) =>{
    const userData = await getAllData(userModel,{})
    return res.json({
        "status":true,
        "message":"User listed successfully",
        "data":userData
    })
}