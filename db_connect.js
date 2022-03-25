const mongoose = require('mongoose')
const {env}  = require("./config")
const dbConnect = () =>{
    try{
        mongoose.connect(env.DB_URL,{},(err)=>{
            if(!err){
                console.log("Database connected successfully")
            }
            else{
                console.log(err)
            }
        })
    }   
    catch(e){
        console.log(e)
    }
}

module.exports=dbConnect