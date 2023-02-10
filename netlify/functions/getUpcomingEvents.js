
const {Op, Sequelize} = require('sequelize')
const {loadModels, destroySequelize} = require("../../Database/Models");
export async function handler() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };
  const {Event} = await loadModels()
  const eventList = await Event.findAll({
    where  : {
      startAt : {
        [Op.gt] : Sequelize.literal("NOW()")
      }
      
    },
    order: [["startAt", "ASC"]],
  });
  await destroySequelize()
  return {
    statusCode : 200,
    headers,
    body : JSON.stringify(eventList)
  }
} 