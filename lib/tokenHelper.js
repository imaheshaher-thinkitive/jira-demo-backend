const jwt = require("jsonwebtoken")
const { env } = require("../config")
module.exports.generateToken = (payload) =>{
    return jwt.sign(payload,env.JWT_SECRETE,{expiresIn:'24h'})
}