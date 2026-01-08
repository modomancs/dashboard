import ClientList from "@/components/Clients/ClientList";
import CreateClientForm from "@/components/Clients/CreateClientForm";
import CreateTaskForm from "@/components/Tasks/CreateTaskForm";
import TaskList from "@/components/Tasks/TaskList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    data: tasks,
    error: tasksError,
    isLoading: tasksLoading,
  } = useSWR(session ? "/api/tasks" : null);
  const {
    data: clients,
    error: clientsError,
    isLoading: clientsLoading,
  } = useSWR(session ? "/api/clients" : null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  if (tasksError || clientsError) {
    return <p>Failed to load data...</p>;
  }
  if (tasksLoading || clientsLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <CreateClientForm />
      <CreateTaskForm clients={clients} />
      <ClientList clients={clients} />
      <TaskList tasks={tasks} clients={clients} />
    </>
  );
}
