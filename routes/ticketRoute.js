const router = require("express").Router()
const ticketController = require("../controllers/ticketController")

router.post("/create",ticketController.createTicket)
router.patch("/update",ticketController.updateTicket)
router.get("",ticketController.getTickets)

module.exports = router