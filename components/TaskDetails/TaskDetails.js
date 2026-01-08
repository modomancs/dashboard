import { ArrowLeft, Edit } from "lucide-react";
import TaskCard from "../Tasks/TaskCard";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { useState } from "react";

export default function TaskDetails({ task, clients, companies }) {
  const router = useRouter();
  const client = clients.find((client) => client._id === task.clientId);
  const company = companies.find((company) => company._id === task.companyId);

  const date = new Date(task.createdAt).toLocaleString();

  async function hanldeTaskUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateData = Object.fromEntries(formData);
    const response = await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) return;
    mutate(`/api/tasks/${task._id}`);
    mutate("/api/tasks");
  }

  async function handleTaskDelete() {
    const response = await fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    }
    mutate("/api/tasks");
    router.push("/dashboard");
  }
  return (
    <>
      <ArrowLeft onClick={() => router.back()} />

      <EditableItem onSubmit={hanldeTaskUpdate} display={<h1>{task.title}</h1>}>
        <label htmlFor="title">Title: </label>
        <input id="title" name="title" defaultValue={task.title} required />
        <button type="submit">Save</button>
      </EditableItem>

      <EditableItem
        onSubmit={hanldeTaskUpdate}
        display={<p>Status: {task.status}</p>}
      >
        <label htmlFor="status">Update status:</label>
        <select id="status" name="status" defaultValue={task.status}>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <button type="submit">Save</button>
      </EditableItem>

      <EditableItem
        onSubmit={hanldeTaskUpdate}
        display={
          <>
            <strong>Description: </strong>
            <p>{task.description}</p>
          </>
        }
      >
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={task.description}
          rows={5}
        />
        <button type="submit">Save</button>
      </EditableItem>
      <p>
        <strong>Client: </strong>
        {client ? client.name : "No client assigned"}
      </p>
      <p>
        <strong>Company: </strong>
        {company ? company.name : "Unknown Company"}
      </p>

      <p>{date}</p>
      <button type="button" onClick={handleTaskDelete}>
        Delete Task
      </button>
    </>
  );
}

function EditableItem({ children, display, onSubmit }) {
  const [toggleEdit, setToggleEdit] = useState(false);

  const closeEdit = () => setToggleEdit(false);

  const handleSubmit = async (event) => {
    if (onSubmit) {
      await onSubmit(event);
      closeEdit();
    }
  };

  if (toggleEdit) {
    return (
      <>
        <form onSubmit={handleSubmit}>{children}</form>

        <button type="button" onClick={closeEdit}>
          Cancel
        </button>
      </>
    );
  }

  return (
    <div>
      {display}

      <button type="button" onClick={() => setToggleEdit(true)}>
        Edit
      </button>
    </div>
  );
}
