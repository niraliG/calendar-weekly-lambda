
const {Op} = require('sequelize')
const {Event} = require("../../Database/Models");
export async function handler() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };
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
    headers,
    body : JSON.stringify(eventList)
  }
}