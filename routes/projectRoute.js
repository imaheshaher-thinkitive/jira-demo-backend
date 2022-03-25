const projectController = require("../controllers/projectController")

const router = require("express").Router()

router.post("/create",projectController.createProject)
router.post("/by/id",projectController.getProjectById)
router.get("",projectController.getProjects)
module.exports = router