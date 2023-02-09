const { list, add, update, deleteEvent } = require("../Models/events.model");
async function listEvents(req, res) {
  try {
    const eventList = await list();
    res.send({ message: "Events Fetched Successfully!", data: eventList });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
}
async function addEvent(req, res) {
  try {
    const id = await add(req.body);
    res.send({ message: "Event Created Successfully!", data: id });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
}
async function updateEvent(req, res) {
  try {
    const updatedEvent = await update(req.body, req.params.eventId);
    res.send({ message: "Event Updated Successfully!", data: updatedEvent });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
}
async function delEvent(req, res) {
  try {
    const deletedEvent = await deleteEvent();
    res.send({ message: "Event Deleted Successfully!", data: deletedEvent });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
}
module.exports = {
  listEvents,
  addEvent,
  updateEvent,
  delEvent
};
