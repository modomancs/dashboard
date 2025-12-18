import TaskCard from "./TaskCard";

export default function TaskList({ tasks, clients }) {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in_progress");
  const doneTasks = tasks.filter((task) => task.status === "done");
  return (
    <div>
      <h2>To-Do</h2>
      {todoTasks.map((task) => (
        <TaskCard key={task._id} task={task} clients={clients} />
      ))}
      <h2>In Progress</h2>
      {inProgressTasks.map((task) => (
        <TaskCard key={task._id} task={task} clients={clients} />
      ))}
      <h2>Done</h2>
      {doneTasks.map((task) => (
        <TaskCard key={task._id} task={task} clients={clients} />
      ))}
    </div>
  );
}
