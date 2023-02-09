const {Event} = require("../../Database/Models");
export async function handler() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };
  const eventList = await Event.findAll({
    order: [["startAt", "DESC"]],
  });
  return {
    statusCode : 200,
    headers,
    body : JSON.stringify(eventList)
  }
}