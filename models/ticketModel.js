const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({
    title:String,
    description:String,
    users:[{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }],
    ticket_id:{
        type:String,
        unique:true
    },
    lifecycle:{
        type:String,
        enum:["todo","in-progress","ready-for-review","code-review"],
        default:"todo"
    },
    reporter_id:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    project_id:{
        type:mongoose.Types.ObjectId,
        ref:'project'
    },
    status:{
        type:Boolean
    }
},{timestamps:true})

const ticketModel = mongoose.model("ticket",ticketSchema)
module.exports = ticketModel