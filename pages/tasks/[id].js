import TaskDetails from "@/components/TaskDetails/TaskDetails";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function TaskDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();
  const {
    data: task,
    error: taskError,
    isLoading: taskLoading,
  } = useSWR(`/api/tasks/${id}`);

  const {
    data: clients,
    error: clientsError,
    isLoading: clientsLoading,
  } = useSWR(`/api/clients`);

  const {
    data: companies,
    error: companiesError,
    isLoading: companiesLoading,
  } = useSWR(`/api/companies`);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  if (taskLoading || clientsLoading || companiesLoading) {
    return <p>Loading data...</p>;
  }
  if (taskError || clientsError || companiesError) {
    return <p>Failed to load data...</p>;
  }
  return <TaskDetails task={task} clients={clients} companies={companies} />;
}
