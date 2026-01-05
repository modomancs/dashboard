import ClientList from "@/components/Clients/ClientList";
import CreateClientForm from "@/components/Clients/CreateClientForm";
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
      <CreateClientForm companies={companies} />
      <CreateTaskForm companies={companies} clients={clients} />
      <ClientList clients={clients} tasks={tasks} />
      <TaskList tasks={tasks} clients={clients} />
    </>
  );
}
