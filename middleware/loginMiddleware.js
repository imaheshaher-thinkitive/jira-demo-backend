
const jwt = require("jsonwebtoken")
const {env} = require("../config")
const loginmiddleware = async(req,res,next) =>{
    let  token = req.headers.authorization
    
    if(token==null){
        return res.json({
            "status":false,
            "message":"Token is required",
            "data":{}

        })
    } else {
    jwt.verify(t,env.JWT_SECRETE,(err,decode) => {
    
        if(err) {
            return res.json({
                "status":false,
                "message":"Token is expire",
                "data":{}
            })
        }
        // console.log(err)
        req.user = decode
    
    })
    
    if(req.user) {
        next()

    }
    else {
        return res.json({
            "status":false,
            "message":"Token is expire",
            "data":{}
        })
    }
}
}

module.exports = loginmiddleware