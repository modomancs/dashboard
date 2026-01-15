import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import {
  NewTaskButtonRow,
  NewTaskErrorMessage,
  NewTaskField,
  NewTaskForm,
  NewTaskFormCard,
  NewTaskInput,
  NewTaskMessage,
  NewTaskPrimaryButton,
  NewTaskSelect,
  NewTaskTextarea,
  NewTaskTitle,
} from "./StyledCreateTaskForm";

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
    <NewTaskFormCard>
      <NewTaskTitle>Create Task</NewTaskTitle>
      <NewTaskForm onSubmit={handleSubmit}>
        <NewTaskField htmlFor="title">
          Title
          <NewTaskInput type="text" id="title" name="title" required />
        </NewTaskField>

        <NewTaskField htmlFor="description">
          Description
          <NewTaskTextarea id="description" name="description" rows={5} />
        </NewTaskField>

        <NewTaskField htmlFor="status">
          Status
          <NewTaskSelect id="status" name="status" defaultValue="todo" required>
            <option value="todo">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </NewTaskSelect>
        </NewTaskField>

        <NewTaskField htmlFor="clientId">
          Client
          <NewTaskSelect id="clientId" name="clientId" required>
            <option value="">Select Client</option>
            {clients?.map((client) => (
              <option key={client._id} value={client._id}>
                {client.name}
              </option>
            ))}
          </NewTaskSelect>
        </NewTaskField>

        <NewTaskButtonRow>
          <NewTaskPrimaryButton type="submit">Submit</NewTaskPrimaryButton>
        </NewTaskButtonRow>

        {submitError && (
          <NewTaskErrorMessage>{submitError}</NewTaskErrorMessage>
        )}
        {successMessage && <NewTaskMessage>{successMessage}</NewTaskMessage>}
      </NewTaskForm>
    </NewTaskFormCard>
  );
}
