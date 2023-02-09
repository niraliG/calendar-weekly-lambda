const {Event} = require("../../Database/Models");
export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
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