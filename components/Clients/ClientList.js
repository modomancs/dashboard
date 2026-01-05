import Link from "next/link";

export default function ClientList({ clients }) {
  return (
    <div>
      <h2>Clients</h2>

      {clients.map((client) => (
        <div key={client._id}>
          <Link href={`/clients/${client._id}`}>{client.name}</Link>
        </div>
      ))}
    </div>
  );
}
