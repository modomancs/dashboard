import { useState } from "react";
import useSWR from "swr";

export default function CreateTaskForm({ companies, clients }) {
  const { mutate } = useSWR("/api/tasks");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedCompanyId, setSelectedCompanyId] = useState("");

  const filteredClients = selectedCompanyId
    ? clients.filter((client) => client.companyId === selectedCompanyId)
    : [];

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData);
    taskData.createdAt = new Date().toISOString();

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
    setSelectedCompanyId("");
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

        <label htmlFor="companyId">
          Company
          <select
            id="companyId"
            name="companyId"
            value={selectedCompanyId}
            onChange={(event) => setSelectedCompanyId(event.target.value)}
            required
          >
            <option value="">Select company</option>
            {companies?.map((company) => (
              <option key={company._id} value={company._id}>
                {company.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="clientId">
          Client
          <select
            id="clientId"
            name="clientId"
            disabled={!selectedCompanyId}
            required
          >
            <option value="">
              {selectedCompanyId ? "Select client" : "Select company"}
            </option>
            {filteredClients.map((filteredClient) => (
              <option key={filteredClient._id} value={filteredClient._id}>
                {filteredClient.name}
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
