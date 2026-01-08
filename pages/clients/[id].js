import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";

import { ArrowLeft } from "lucide-react";
import TaskList from "@/components/Tasks/TaskList";
import { useState } from "react";

export default function ClientPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: client,
    error: clientError,
    isLoading: clientLoading,
  } = useSWR(`/api/clients/${id}`);

  const {
    data: tasks,
    error: tasksError,
    isLoading: tasksLoading,
  } = useSWR("/api/tasks");

  const {
    data: clients,
    error: clientsError,
    isLoading: clientsLoading,
  } = useSWR("/api/clients");

  if (clientLoading || tasksLoading || clientsLoading) return <p>Loading...</p>;
  if (clientError || tasksError || clientsError)
    return <p>Error loading data</p>;

  const clientTasks = tasks.filter((task) => task.clientId === id);

  const todoCount = clientTasks.filter((task) => task.status === "todo").length;
  const inProgressCount = clientTasks.filter(
    (task) => task.status === "in_progress"
  ).length;
  const doneCount = clientTasks.filter((task) => task.status === "done").length;

  async function handleClientDelete() {
    const response = await fetch(`/api/clients/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    }
    mutate("/api/clients");
    router.push("/dashboard");
  }
  async function handleClientUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const clientData = Object.fromEntries(formData);
    const response = await fetch(`/api/clients/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) return;
    mutate(`/api/clients/${id}`);
    mutate("/api/clients");
  }
  return (
    <div>
      <ArrowLeft onClick={() => router.back()} />

      <EditableItem
        onSubmit={handleClientUpdate}
        display={<h1>{client.name}</h1>}
      >
        <label htmlFor="name">Client name:</label>
        <input id="name" name="name" defaultValue={client.name} required />
        <button type="submit">Save</button>
      </EditableItem>

      <p>Total: {clientTasks.length}</p>
      <p>Todo: {todoCount}</p>
      <p>In Progress: {inProgressCount}</p>
      <p>Done: {doneCount}</p>

      <TaskList tasks={clientTasks} clients={clients} />

      <button type="button" onClick={handleClientDelete}>
        Delete Client
      </button>
    </div>
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
