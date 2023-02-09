const {Event} = require("../../Database/Models");
export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };
  const deletedEvent = await Event.destroy({
     where : {
       id : event.body.id,
     }
   });
  return {
    statusCode : 200,
    headers,
    body : JSON.stringify(deletedEvent)
  }
}