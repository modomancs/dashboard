import {
  Column,
  ColumnHeader,
  ColumnList,
  ColumnsGrid,
  ColumnTitle,
  CountBadge,
  Dot,
} from "./StyledTaskColumns";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, clients }) {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in_progress");
  const doneTasks = tasks.filter((task) => task.status === "done");
  return (
    <ColumnsGrid>
      <Column>
        <ColumnHeader>
          <ColumnTitle>
            <Dot $color="#ef4444" />
            To-Do
          </ColumnTitle>
          <CountBadge>{todoTasks.length}</CountBadge>
        </ColumnHeader>
        <ColumnList>
          {todoTasks.map((task) => (
            <TaskCard key={task._id} task={task} clients={clients} />
          ))}
        </ColumnList>
      </Column>
      <Column>
        <ColumnHeader>
          <ColumnTitle>
            <Dot $color="#f59e0b" />
            In Progress
          </ColumnTitle>
          <CountBadge>{inProgressTasks.length}</CountBadge>
        </ColumnHeader>
        <ColumnList>
          {inProgressTasks.map((task) => (
            <TaskCard key={task._id} task={task} clients={clients} />
          ))}
        </ColumnList>
      </Column>
      <Column>
        <ColumnHeader>
          <ColumnTitle>
            <Dot $color="#22c55e" />
            Done
          </ColumnTitle>
          <CountBadge>{doneTasks.length}</CountBadge>
        </ColumnHeader>
        <ColumnList>
          {doneTasks.map((task) => (
            <TaskCard key={task._id} task={task} clients={clients} />
          ))}
        </ColumnList>
      </Column>
    </ColumnsGrid>
  );
}
