const {Event} = require("../../Database/Models");
export async function handler(event) {
  console.log(event);
  const { id } = await Event.create({
    ...event.body
   });
  return {
    statusCode : 200,
    body : `${id}`
  }
}