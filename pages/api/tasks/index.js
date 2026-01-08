import dbConnect from "@/db/connect";
import Task from "@/db/models/Task";
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
    const tasks = await Task.find({ companyId: session.companyId });
    response.status(200).json(tasks);
    return;
  }
  if (request.method === "POST") {
    const taskData = {
      ...request.body,
      companyId: session.companyId,
      createdAt: new Date(),
    };
    const createdTask = await Task.create(taskData);
    response.status(201).json(createdTask);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
