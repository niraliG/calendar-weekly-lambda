const {Event} = require("../../Database/Models");
export async function handler() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
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