import dbConnect from "@/db/connect";
import Task from "@/db/models/Task";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const task = await Task.findById(id);
    response.status(200).json(task);
    return;
  }
  if (request.method === "PUT") {
    const updatedTask = await Task.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    response.status(200).json(updatedTask);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
