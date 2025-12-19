import Link from "next/link";

export default function TaskCard({ task, clients }) {
  const client = clients.find((client) => client._id === task.clientId);
  return (
    <Link href={`/tasks/${task._id}`}>
      <div>
        <h3>{task.title}</h3>
        <p>
          Client: {client ? client.name : "No client assigned - please add one"}
        </p>
      </div>
    </Link>
  );
}
