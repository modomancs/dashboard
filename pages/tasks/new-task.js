import { HintLink } from "@/components/Clients/StyledClientsPage";
import PageError from "@/components/Feedback/PageError";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
import PageLoading from "@/components/Loading/PageLoading";
import CreateTaskForm from "@/components/Tasks/CreateTaskForm";
import {
  NewTaskHint,
  NewTaskPageTitle,
  NewTaskWrapper,
} from "@/components/Tasks/StyledCreateTaskForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function NewTaskPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    data: clients,
    error: clientsError,
    isLoading: clientsLoading,
  } = useSWR(session ? "/api/clients" : null);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);
  if (status === "loading") return <PageLoading />;
  if (!session) return <PageLoading />;
  if (clientsLoading) return <PageLoading />;
  if (clientsError) return <PageError />;
  return (
    <PageShell>
      <PageContainer>
        <NewTaskWrapper>
          <NewTaskPageTitle>Create a new Task</NewTaskPageTitle>
          <CreateTaskForm clients={clients} />
          <NewTaskHint>
            Add a new client? Click <HintLink href="/clients">here</HintLink>
          </NewTaskHint>
        </NewTaskWrapper>
      </PageContainer>
    </PageShell>
  );
}
