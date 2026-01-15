import {
  List,
  ListTitle,
  ClientItem,
  ClientMeta,
  ClientName,
} from "./StyledClientList";

export default function ClientList({ clients }) {
  if (!clients || clients.length === 0) return <p>No clients yet.</p>;

  return (
    <div>
      <ListTitle>Clients</ListTitle>

      <List>
        {clients.map((client) => (
          <ClientItem key={client._id} href={`/clients/${client._id}`}>
            <div>
              <ClientName>{client.name}</ClientName>
              <ClientMeta>Click to view details</ClientMeta>
            </div>
          </ClientItem>
        ))}
      </List>
    </div>
  );
}
