import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";

export default function CreateTaskForm({ clients }) {
  const { mutate } = useSWR("/api/tasks");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { data: session } = useSession();

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    setSuccessMessage("");

    if (!session?.companyId) {
      setSubmitError("You must be logged in.");
      return;
    }

    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData);
    taskData.createdAt = new Date().toISOString();
    taskData.companyId = session.companyId;

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      setSubmitError("Failed to create task");
      return;
    }

    setSuccessMessage("Task has been created!");
    mutate();
    event.target.reset();
  }

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="title" required />
        </label>

        <label htmlFor="description">
          Description
          <textarea id="description" name="description" rows={5} />
        </label>

        <label htmlFor="status">
          Status
          <select id="status" name="status" defaultValue="todo" required>
            <option value="todo">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label htmlFor="clientId">
          Client
          <select id="clientId" name="clientId" required>
            <option value="">Select Client</option>
            {clients?.map((client) => (
              <option key={client._id} value={client._id}>
                {client.name}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>

        {submitError && <p>{submitError}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
}
