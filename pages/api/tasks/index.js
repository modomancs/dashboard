import dbConnect from "@/db/connect";
import Task from "@/db/models/Task";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const tasks = await Task.find();
    response.status(200).json(tasks);
    return;
  }
  if (request.method === "POST") {
    const taskData = request.body;
    const createdTask = await Task.create(taskData);
    response.status(201).json(createdTask);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
