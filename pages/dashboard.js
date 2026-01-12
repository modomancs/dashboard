import TasksOverviewChart from "@/components/ApexCharts/TasksOverviewChart";
import {
  BottomSection,
  Card,
  DashboardWrapper,
  TopSection,
} from "@/components/HomePageStyles/StyledDashboard";
import DashboardActions from "@/components/Layout/DashboardActions";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
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
    <PageShell>
      <PageContainer>
        <DashboardWrapper>
          <DashboardActions />
          <TopSection>
            <Card>
              <DashboardActions />
            </Card>
            <Card>
              <TasksOverviewChart tasks={tasks} />
            </Card>
          </TopSection>
          <BottomSection>
            <TaskList tasks={tasks} clients={clients} />
          </BottomSection>
        </DashboardWrapper>
      </PageContainer>
    </PageShell>
  );
}
