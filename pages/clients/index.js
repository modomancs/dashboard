import ClientList from "@/components/Clients/ClientList";
import CreateClientForm from "@/components/Clients/CreateClientForm";
import {
  ClientsWrapper,
  GlassCard,
  Hint,
  HintLink,
  Stack,
} from "@/components/Clients/StyledClientsPage";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
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

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  if (clientsLoading) return <p>Loading...</p>;
  if (clientsError) return <p>Failed to load clients.</p>;

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
              Dont have a task? Click{" "}
              <HintLink href="/tasks/new-task">here</HintLink>
            </Hint>
          </Stack>
        </ClientsWrapper>
      </PageContainer>
    </PageShell>
  );
}
