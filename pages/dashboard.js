import TaskList from "@/components/Tasks/TaskList";
import useSWR from "swr";

export default function DashboardPage() {
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
  if (tasksError) {
    return <p>Failed to load tasks...</p>;
  }
  if (tasksLoading) {
    return <p>Loading tasks...</p>;
  }
  if (clientsError) {
    return <p>Failed to load clients...</p>;
  }
  if (clientsLoading) {
    return <p>Loading clients...</p>;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
