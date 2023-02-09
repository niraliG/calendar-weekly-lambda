const { events } = require("../Database/Models");
async function list() {
  const eventList = await events.findAll({
    order: [["startAt", "DESC"]],
  });
  return eventList;
}
async function add(eventObj) {
  const { id } = await file.create({
   ...eventObj
  });
  return id;
}
async function update(body, eventId) {
  const updatedEvent = await file.update({
   ...body
  }, {
    where : {
      id : eventId,
    }
  });
  return updatedEvent;
}
async function deleteEvent(eventId) {
  const deletedEvent = await file.destroy({
    where : {
      id : eventId,
    }
  });
  return deletedEvent;
}
module.exports = {
  list,
  add,
  update,
  deleteEvent
};
