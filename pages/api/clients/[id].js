import dbConnect from "@/db/connect";
import Client from "@/db/models/Client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  if (!session?.companyId) {
    response.status(401).json({ message: "Unauthorized" });
    return;
  }
  const { id } = request.query;
  const client = await Client.findById(id);
  if (!client) {
    response.status(404).json({ message: "cLient not found" });
    return;
  }
  if (client.companyId.toString() !== session.companyId) {
    response.status(403).json({ message: "Forbidden" });
    return;
  }
  if (request.method === "GET") {
    response.status(200).json(client);
    return;
  }
  if (request.method === "DELETE") {
    await Client.findByIdAndDelete(id);
    response.status(200).json({ message: "Client has been deleted" });
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
