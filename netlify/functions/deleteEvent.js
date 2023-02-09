const {Event} = require("../../Database/Models");
export async function handler(event) {
  const deletedEvent = await Event.destroy({
     where : {
       id : event.body.id,
     }
   });
  return {
    statusCode : 200,
    body : JSON.stringify(deletedEvent)
  }
}