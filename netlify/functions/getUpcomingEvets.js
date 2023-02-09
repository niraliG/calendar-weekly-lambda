
const {Op} = require('sequelize')
const {Event} = require("../../Database/Models");
export async function handler() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
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