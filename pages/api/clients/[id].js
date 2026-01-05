import dbConnect from "@/db/connect";
import Client from "@/db/models/Client";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const client = await Client.findById(id);
    response.status(200).json(client);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
