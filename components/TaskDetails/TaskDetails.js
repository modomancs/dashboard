import { ArrowLeft } from "lucide-react";
import TaskCard from "../Tasks/TaskCard";
import { useRouter } from "next/router";

export default function TaskDetails({ task, clients, companies }) {
  const router = useRouter();
  const client = clients.find((client) => client._id === task.clientId);
  const company = companies.find((company) => company._id === task.companyId);

  const date = new Date(task.createdAt).toLocaleString();
  return (
    <>
      <ArrowLeft onClick={() => router.back()} />
      <TaskCard task={task} clients={clients} />
      <p>
        <strong>Status: </strong>
        {task.status}
      </p>

      <strong>Description: </strong>
      <p>{task.description}</p>
      <p>
        <strong>Client: </strong>
        {client ? client.name : "No client assigned"}
      </p>
      <p>
        <strong>Company: </strong>
        {company ? company.name : "Unknown Company"}
      </p>

      <p>{date}</p>
    </>
  );
}
