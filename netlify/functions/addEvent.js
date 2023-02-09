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
  } else if (event.httpMethod === "POST") {
    const obj = JSON.parse(event.body);
    const { id } = await Event.create({
      ...obj,
    });
    return {
      statusCode: 200,
      headers,
      body: `${id}`,
    };
  }
}
