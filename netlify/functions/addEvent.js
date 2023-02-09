const {Event} = require("../../Database/Models");
export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };
  console.log(event);
  const { id } = await Event.create({
    ...event.body
   });
  return {
    statusCode : 200,
    headers,
    body : `${id}`
  }
}