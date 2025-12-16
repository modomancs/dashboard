import dbConnect from "@/db/connect";
import Client from "@/db/models/Client";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const clients = await Client.find();
    response.status(200).json(clients);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
