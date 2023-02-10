const {loadModels, destroySequelize} = require("../../Database/Models");
export async function handler() {
 
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };
  const {Event} = await loadModels()
  console.log(Event);
  const eventList = await Event.findAll({
    order: [["startAt", "DESC"]],
  });
  await destroySequelize()
  return {
    statusCode : 200,
    headers,
    body : JSON.stringify(eventList)
  }
}