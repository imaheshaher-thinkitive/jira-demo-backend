const mongoose = require("mongoose")

const userSechma = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    designation:String,
    token:String
},{timestamps:true})

const userModel = mongoose.model("user",userSechma)
module.exports = userModel