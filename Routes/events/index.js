var express = require("express");
const { listEvents, addEvent, updateEvent, delEvent  } = require("../../Controllers/events.controller");
var router = express.Router();

router.get("/list",  listEvents);
router.post("/add",  addEvent);
router.put("/update/:eventId",  updateEvent);
router.delete("/delete/:eventId",  delEvent);

module.exports = router;
