const {Event} = require("../../Database/Models");
export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };
  const updatedEvent = await Event.update({
    ...event.body
   }, {
     where : {
       id : event.body.id,
     }
   });
  return {
    statusCode : 200,
    headers,
    body : JSON.stringify(updatedEvent)
  }
}