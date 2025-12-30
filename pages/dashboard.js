import CreateTaskForm from "@/components/Tasks/CreateTaskForm";
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
  const {
    data: companies,
    error: companiesError,
    isLoading: companiesLoading,
  } = useSWR("/api/companies");
  if (tasksError || clientsError || companiesError) {
    return <p>Failed to load data...</p>;
  }
  if (tasksLoading || clientsLoading || companiesLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <CreateTaskForm companies={companies} clients={clients} />
      <TaskList tasks={tasks} clients={clients} />
    </>
  );
}
