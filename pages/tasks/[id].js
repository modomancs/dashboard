import TaskDetails from "@/components/TaskDetails/TaskDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function TaskDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

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

  if (taskLoading || clientsLoading || companiesLoading) {
    return <p>Loading data...</p>;
  }
  if (taskError || clientsError || companiesError) {
    return <p>Failed to load data...</p>;
  }
  return <TaskDetails task={task} clients={clients} companies={companies} />;
}
