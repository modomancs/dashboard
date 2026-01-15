import ClientList from "@/components/Clients/ClientList";
import CreateClientForm from "@/components/Clients/CreateClientForm";
import {
  ClientsWrapper,
  GlassCard,
  Hint,
  HintLink,
  Stack,
} from "@/components/Clients/StyledClientsPage";
import PageError from "@/components/Feedback/PageError";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
import PageLoading from "@/components/Loading/PageLoading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function ClientsPage() {
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
        <ClientsWrapper>
          <Stack>
            <GlassCard>
              <CreateClientForm />
            </GlassCard>
            <GlassCard>
              <ClientList clients={clients} />
            </GlassCard>
            <Hint>
              Create a new task? Click{" "}
              <HintLink href="/tasks/new-task">here</HintLink>
            </Hint>
          </Stack>
        </ClientsWrapper>
      </PageContainer>
    </PageShell>
  );
}
