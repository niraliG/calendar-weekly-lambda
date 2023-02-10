const { Event } = require("../../Database/Models");
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
  } else if (event.httpMethod === "PUT") {
    const eventObj = JSON.parse(event.body);
    const updatedEvent = await Event.update(
      {
        ...eventObj,
      },
      {
        where: {
          id: eventObj.id,
        },
      }
    );
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updatedEvent),
    };
  }
}
