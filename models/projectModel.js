const mongoose = require("mongoose")
const projectSchema = new mongoose.Schema({
    title:String,
    project_member:[{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }],
    project_owner:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    is_active:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const projectModel = mongoose.model("project",projectSchema)
module.exports = projectModel