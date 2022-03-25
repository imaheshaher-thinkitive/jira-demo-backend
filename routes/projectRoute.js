const projectController = require("../controllers/projectController")
const { validateData } = require("../lib/validateData")
const { projectValidator } = require("../validators/projectValidator")

const router = require("express").Router()

router.post("/create",[projectValidator.validateTitle,validateData],projectController.createProject)
router.post("/by/id",projectController.getProjectById)
router.get("",projectController.getProjects)
module.exports = router