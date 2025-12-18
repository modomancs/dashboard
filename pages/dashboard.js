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
  if (tasksError || clientsError) {
    return <p>Failed to load data...</p>;
  }
  if (tasksLoading || clientsLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <TaskList tasks={tasks} clients={}/>
    </>
  );
}
