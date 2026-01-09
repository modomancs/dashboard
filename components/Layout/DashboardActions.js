import { PlusCircleIcon, UserCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardActions() {
  return (
    <>
      <Link href="/tasks/new-task">
        <PlusCircleIcon size={20} />
        Create Task
      </Link>

      <Link href="/clients">
        <UserCircle size={22} />
        Clients
      </Link>
    </>
  );
}
