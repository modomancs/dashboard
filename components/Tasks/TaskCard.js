import {
  Pill,
  TaskCardLink,
  TaskMeta,
  TaskMetaRow,
  TaskTitle,
} from "./StyledTaskCard";

export default function TaskCard({ task, clients }) {
  const client = clients.find((client) => client._id === task.clientId);
  const due = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString()
    : "No due date";
  const priority = task.priority || "medium";

  return (
    <TaskCardLink href={`/tasks/${task._id}`}>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskMeta>
        Client: {client ? client.name : "No client assigned - please add one"}
      </TaskMeta>
      <TaskMetaRow>
        <Pill>{priority}</Pill>
        <TaskMeta>{due}</TaskMeta>
      </TaskMetaRow>
    </TaskCardLink>
  );
}
