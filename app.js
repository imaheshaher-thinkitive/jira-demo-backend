const express = require("express")
const dbConnect = require("./db_connect")
const app = express()
const PORT=5050
const userRoute = require("./routes/userRoute")
const projectRoute = require("./routes/projectRoute")
const ticketRoute = require("./routes/ticketRoute")

//Database connection
dbConnect()

//express middleware
app.use(express.json())

//app routing
app.use("/api/user",userRoute)
app.use("/api/project",projectRoute)
app.use("/api/ticket",ticketRoute)

app.get("/",async(req,res)=>{
    res.send("Welcome!")
})

//server listing
app.listen(PORT,()=>console.log("Server started.."))