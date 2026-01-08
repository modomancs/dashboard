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

  const { id } = request.query;
  const task = await Task.findById(id);
  if (!task) {
    response.status(404).json({ message: "Task not found" });
    return;
  }
  if (task.companyId.toString() !== session.companyId) {
    response.status(403).json({ message: "Forbidden" });
    return;
  }

  if (request.method === "GET") {
    response.status(200).json(task);
    return;
  }
  if (request.method === "PUT") {
    const { companyId, ...updateData } = request.body;

    const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    response.status(200).json(updatedTask);
    return;
  }

  if (request.method === "DELETE") {
    await Task.findByIdAndDelete(id);
    response.status(200).json({ message: "task deleted" });
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
