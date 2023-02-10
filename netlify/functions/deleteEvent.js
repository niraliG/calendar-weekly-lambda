const {loadModels, destroySequelize} = require("../../Database/Models");
export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  };
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "Successful preflight call.",
    };
  } else if (event.httpMethod === "DELETE") {
    const {Event} = await loadModels()
    const eventObj = JSON.parse(event.body);
    const deletedEvent = await Event.destroy({
      where: {
        id: eventObj.id,
      },
    });
    await destroySequelize()
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(deletedEvent),
    };
  }
}
