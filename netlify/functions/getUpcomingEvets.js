
const {Op} = require('sequelize')
const {Event} = require("../../Database/Models");
export async function handler() {
  const eventList = await Event.findAll({
    where  : {
      startAt : {
        [Op.gte] : new Date()
      }
      
    },
    order: [["startAt", "DESC"]],
  });
  return {
    statusCode : 200,
    body : JSON.stringify(eventList)
  }
}