import PageError from "@/components/Feedback/PageError";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
import PageLoading from "@/components/Loading/PageLoading";
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

  if (status === "loading") return <PageLoading />;
  if (!session) return null;

  if (taskLoading || clientsLoading || companiesLoading) {
    return <PageLoading />;
  }
  if (taskError || clientsError || companiesError) {
    return <PageError />;
  }
  return (
    <PageShell>
      <PageContainer>
        <TaskDetails task={task} clients={clients} companies={companies} />
      </PageContainer>
    </PageShell>
  );
}
