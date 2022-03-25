const { getData, getAllData } = require("../lib/queryHelper")
const projectModel = require("../models/projectModel")

module.exports.createProject = async(req,res) =>{
    const data = req.body
    console.log(data)
    let projectData = new projectModel(data)
    projectData.save((err,result) =>{
        if(!err){
            return res.json({
                "status":true,
                "message":"Project created successfully",
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

module.exports.getProjectById = async(req,res)=>{
    let id = req.body.id
    const projectData = await getData(projectModel,{_id:id},{},populate="project_member project_owner")
    return res.json({
        "status":true,
        "message":"Project detailed successfully",
        "data":projectData
    })
}

module.exports.getProjects = async(req,res)=>{
    const projectData = await getAllData(projectModel,{})
    return res.json({
        "status":true,
        "message":"Project listed successfully",
        "data":projectData
    })
}