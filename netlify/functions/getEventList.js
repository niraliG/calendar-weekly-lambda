const {Event} = require("../../Database/Models");
export async function handler() {
  const eventList = await Event.findAll({
    order: [["startAt", "DESC"]],
  });
  return {
    statusCode : 200,
    body : JSON.stringify(eventList)
  }
}