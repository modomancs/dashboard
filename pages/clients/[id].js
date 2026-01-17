import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { ArrowLeft } from "lucide-react";
import TaskList from "@/components/Tasks/TaskList";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  ClientsBackButton,
  ClientsButtonRow,
  ClientsDeleteButton,
  ClientsDetailsPage,
  ClientsEditButton,
  ClientsGhostButton,
  ClientsGlassCard,
  ClientsInlineForm,
  ClientsInput,
  ClientsLabel,
  ClientsMeta,
  ClientsPrimaryButton,
  ClientsStatCard,
  ClientsStatLabel,
  ClientsStatsRow,
  ClientsStatValue,
  ClientsTitle,
  ClientsTopBar,
} from "@/components/Clients/StyledClientsDetails";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
import PageLoading from "@/components/Loading/PageLoading";
import PageError from "@/components/Feedback/PageError";
import {
  ButtonRow,
  ConfirmTextDanger,
  DeleteButton,
  DetailsSection,
  GhostButton,
} from "@/components/TaskDetails/StyledTaskDetails";

export default function ClientPage() {
  const router = useRouter();
  const { id } = router.query;
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { data: session, status } = useSession();
  const {
    data: client,
    error: clientError,
    isLoading: clientLoading,
  } = useSWR(`/api/clients/${id}`);

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

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <PageLoading />;
  if (!session) return <PageLoading />;

  if (clientLoading || tasksLoading || clientsLoading) return <PageLoading />;
  if (clientError || tasksError || clientsError) return <PageError />;

  const clientTasks = tasks.filter((task) => task.clientId === id);

  const todoCount = clientTasks.filter((task) => task.status === "todo").length;
  const inProgressCount = clientTasks.filter(
    (task) => task.status === "in_progress"
  ).length;
  const doneCount = clientTasks.filter((task) => task.status === "done").length;

  async function handleClientDelete() {
    const response = await fetch(`/api/clients/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    }
    mutate("/api/clients");
    router.push("/dashboard");
  }
  async function handleClientUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const clientData = Object.fromEntries(formData);
    const response = await fetch(`/api/clients/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) return;
    mutate(`/api/clients/${id}`);
    mutate("/api/clients");
  }
  return (
    <PageShell>
      <PageContainer>
        <ClientsDetailsPage>
          <ClientsTopBar>
            <ClientsBackButton type="button" onClick={() => router.back()}>
              <ArrowLeft size={18} /> Back
            </ClientsBackButton>
          </ClientsTopBar>

          <ClientsGlassCard>
            <EditableItem
              onSubmit={handleClientUpdate}
              display={
                <>
                  <ClientsTitle>{client.name}</ClientsTitle>
                  <ClientsMeta>
                    Tasks assigned to this client are shown below.
                  </ClientsMeta>
                </>
              }
            >
              <ClientsLabel htmlFor="name">Client name</ClientsLabel>
              <ClientsInput
                id="name"
                name="name"
                defaultValue={client.name}
                required
              />
              <ClientsButtonRow>
                <ClientsPrimaryButton type="submit">Save</ClientsPrimaryButton>
              </ClientsButtonRow>
            </EditableItem>
          </ClientsGlassCard>

          <ClientsStatsRow>
            <ClientsStatCard>
              <ClientsStatValue>{clientTasks.length}</ClientsStatValue>
              <ClientsStatLabel>Total</ClientsStatLabel>
            </ClientsStatCard>
            <ClientsStatCard>
              <ClientsStatValue>{todoCount}</ClientsStatValue>
              <ClientsStatLabel>To Do</ClientsStatLabel>
            </ClientsStatCard>
            <ClientsStatCard>
              <ClientsStatValue>{inProgressCount}</ClientsStatValue>
              <ClientsStatLabel>In Progress</ClientsStatLabel>
            </ClientsStatCard>
            <ClientsStatCard>
              <ClientsStatValue>{doneCount}</ClientsStatValue>
              <ClientsStatLabel>Done</ClientsStatLabel>
            </ClientsStatCard>
          </ClientsStatsRow>

          <ClientsGlassCard>
            <TaskList tasks={clientTasks} clients={clients} />
          </ClientsGlassCard>

          <DetailsSection>
            {!confirmDelete ? (
              <ClientsDeleteButton
                type="button"
                onClick={() => setConfirmDelete(true)}
              >
                Delete Client
              </ClientsDeleteButton>
            ) : (
              <>
                <ConfirmTextDanger>
                  Are you sure you want to delete this client?
                </ConfirmTextDanger>
                <ButtonRow>
                  <DeleteButton type="button" onClick={handleClientDelete}>
                    Confirm Delete
                  </DeleteButton>
                  <GhostButton
                    type="button"
                    onClick={() => setConfirmDelete(false)}
                  >
                    Cancel
                  </GhostButton>
                </ButtonRow>
              </>
            )}
          </DetailsSection>
        </ClientsDetailsPage>
      </PageContainer>
    </PageShell>
  );
}

function EditableItem({ children, display, onSubmit }) {
  const [editMode, setEditMode] = useState(false);

  const closeEdit = () => setEditMode(false);

  const handleSubmit = async (event) => {
    if (onSubmit) {
      await onSubmit(event);
      closeEdit();
    }
  };

  if (editMode) {
    return (
      <>
        <ClientsInlineForm onSubmit={handleSubmit}>
          {children}
        </ClientsInlineForm>
        <ClientsButtonRow>
          <ClientsGhostButton type="button" onClick={closeEdit}>
            Cancel
          </ClientsGhostButton>
        </ClientsButtonRow>
      </>
    );
  }

  return (
    <div>
      {display}

      <ClientsEditButton type="button" onClick={() => setEditMode(true)}>
        Edit
      </ClientsEditButton>
    </div>
  );
}
