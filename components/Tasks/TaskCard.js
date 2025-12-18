export default function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>Has been assigned to: client name</p>
      <p>Status: {task.status}</p>
    </div>
  );
}
