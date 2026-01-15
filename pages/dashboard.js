import TasksOverviewChart from "@/components/ApexCharts/TasksOverviewChart";
import PageError from "@/components/Feedback/PageError";
import {
  BottomSection,
  Card,
  DashboardWrapper,
  TopSection,
} from "@/components/HomePageStyles/StyledDashboard";
import DashboardActions from "@/components/Layout/DashboardActions";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
import PageLoading from "@/components/Loading/PageLoading";
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

  if (status === "loading") return <PageLoading />;
  if (!session) return <PageLoading />;

  if (tasksError || clientsError) {
    return <PageError />;
  }
  if (tasksLoading || clientsLoading) {
    return <PageLoading />;
  }

  return (
    <PageShell>
      <PageContainer>
        <DashboardWrapper>
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
