export default function ClientList({ clients, tasks }) {
  return (
    <div>
      <h2>Clients</h2>

      {clients.map((client) => {
        const clientTasks = tasks.filter(
          (task) => task.clientId === client._id
        );
        const todoCount = clientTasks.filter(
          (task) => task.status === "todo"
        ).length;
        const inProgressCount = clientTasks.filter(
          (task) => task.status === "in_progress"
        ).length;
        const doneCount = clientTasks.filter(
          (task) => task.status === "done"
        ).length;
        return (
          <div key={client._id}>
            <h3>{client.name}</h3>
            <p>Total tasks: {clientTasks.length}</p>
            <p>Todo: {todoCount}</p>
            <p>In Progress: {inProgressCount}</p>
            <p>Done: {doneCount}</p>
          </div>
        );
      })}
    </div>
  );
}
