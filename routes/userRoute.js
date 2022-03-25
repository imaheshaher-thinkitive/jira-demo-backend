const router = require("express").Router()
const userController = require("../controllers/userController")
const { validateData } = require("../lib/validateData")
const { validateUser } = require("../validators/userValidator")

router.post("/signup",[validateUser.validateEmail,validateUser.validateName,validateData],userController.signUp)
router.post("/by/id",userController.getUserById)
router.get("",userController.getAllUser)

//login user
router.post("/login",userController.loginUser)
module.exports = router