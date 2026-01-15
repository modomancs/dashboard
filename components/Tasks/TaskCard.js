import { TaskCardLink, TaskMeta, TaskTitle } from "./StyledTaskCard";

export default function TaskCard({ task, clients }) {
  const client = clients.find((client) => client._id === task.clientId);

  return (
    <TaskCardLink href={`/tasks/${task._id}`}>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskMeta>
        Client: {client ? client.name : "No client assigned - please add one"}
      </TaskMeta>
    </TaskCardLink>
  );
}
