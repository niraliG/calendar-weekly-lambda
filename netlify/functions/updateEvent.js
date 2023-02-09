const {Event} = require("../../Database/Models");
export async function handler(event) {

  const updatedEvent = await Event.update({
    ...event.body
   }, {
     where : {
       id : event.body.id,
     }
   });
  return {
    statusCode : 200,
    body : JSON.stringify(updatedEvent)
  }
}