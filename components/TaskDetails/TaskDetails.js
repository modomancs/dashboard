import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { useState } from "react";
import {
  BackButton,
  ButtonRow,
  DeleteButton,
  DetailsCard,
  DetailsInput,
  DetailsP,
  DetailsSection,
  DetailsSelect,
  DetailsTextarea,
  DetailsTitle,
  EditButton,
  GhostButton,
  InlineForm,
  Label,
  Page,
  PrimaryButton,
  TopBar,
  Value,
} from "./StyledTaskDetails";

export default function TaskDetails({ task, clients, companies }) {
  const router = useRouter();
  const client = clients.find((client) => client._id === task.clientId);
  const company = companies.find((company) => company._id === task.companyId);

  const date = new Date(task.createdAt).toLocaleString();

  async function handleTaskUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateData = Object.fromEntries(formData);
    const response = await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) return;
    mutate(`/api/tasks/${task._id}`);
    mutate("/api/tasks");
  }

  async function handleTaskDelete() {
    const response = await fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    }
    mutate("/api/tasks");
    router.push("/dashboard");
  }
  return (
    <Page>
      <TopBar>
        <BackButton onClick={() => router.back()}>
          <ArrowLeft size={18} />
          Back
        </BackButton>
      </TopBar>
      <DetailsCard>
        <EditableItem
          onSubmit={handleTaskUpdate}
          display={
            <>
              <DetailsTitle>{task.title}</DetailsTitle>{" "}
              <DetailsP>
                {" "}
                Company: {company ? company.name : "Unknown"} • Created: {date}{" "}
              </DetailsP>
            </>
          }
        >
          <Label htmlFor="title">Title: </Label>
          <DetailsInput
            id="title"
            name="title"
            defaultValue={task.title}
            required
          />
          <ButtonRow>
            <PrimaryButton type="submit">Save</PrimaryButton>
          </ButtonRow>
        </EditableItem>

        <DetailsSection>
          <EditableItem
            onSubmit={handleTaskUpdate}
            display={
              <>
                <Label>Status</Label>
                <Value>{task.status}</Value>
              </>
            }
          >
            <Label>Update status</Label>
            <DetailsSelect name="status" defaultValue={task.status}>
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </DetailsSelect>
            <ButtonRow>
              <PrimaryButton type="submit">Save</PrimaryButton>
            </ButtonRow>
          </EditableItem>
        </DetailsSection>

        <DetailsSection>
          <EditableItem
            onSubmit={handleTaskUpdate}
            display={
              <>
                <Label>Client: </Label>
                <Value>{client ? client.name : "No client assigned"}</Value>
              </>
            }
          >
            <Label>Assign Client</Label>
            <DetailsSelect
              name="clientId"
              defaultValue={task.clientId}
              required
            >
              <option value="">Select client</option>
              {clients?.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.name}
                </option>
              ))}
            </DetailsSelect>
            <ButtonRow>
              <PrimaryButton type="submit">Save</PrimaryButton>
            </ButtonRow>
          </EditableItem>
        </DetailsSection>

        <DetailsSection>
          <EditableItem
            onSubmit={handleTaskUpdate}
            display={
              <>
                <Label>Description</Label>
                <Value>{task.description}</Value>
              </>
            }
          >
            <Label htmlFor="description">Description</Label>
            <DetailsTextarea
              name="description"
              defaultValue={task.description}
              rows={5}
            />
            <ButtonRow>
              <PrimaryButton type="submit">Save</PrimaryButton>
            </ButtonRow>
          </EditableItem>
        </DetailsSection>

        <DeleteButton type="button" onClick={handleTaskDelete}>
          Delete Task
        </DeleteButton>
      </DetailsCard>
    </Page>
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
        <InlineForm onSubmit={handleSubmit}>{children}</InlineForm>
        <ButtonRow>
          <GhostButton type="button" onClick={closeEdit}>
            Cancel
          </GhostButton>
        </ButtonRow>
      </>
    );
  }

  return (
    <div>
      {display}

      <EditButton type="button" onClick={() => setEditMode(true)}>
        Edit
      </EditButton>
    </div>
  );
}
