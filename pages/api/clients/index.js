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

  if (request.method === "GET") {
    const clients = await Client.find({ companyId: session.companyId });
    response.status(200).json(clients);
    return;
  }
  if (request.method === "POST") {
    const clientData = {
      ...request.body,
      companyId: session.companyId,
      createdAt: new Date(),
    };

    const newClient = await Client.create(clientData);
    response.status(201).json(newClient);
  }
  response.status(405).json({ message: "Method not allowed" });
}
