const router = require("express").Router()
const userController = require("../controllers/userController")

router.post("/signup",userController.signUp)
router.post("/by/id",userController.getUserById)
router.get("",userController.getAllUser)

//login user
router.post("/login",userController.loginUser)
module.exports = router