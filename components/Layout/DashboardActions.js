import { PlusCircleIcon, UserCircle } from "lucide-react";
import Link from "next/link";
import { ActionsButton, ActionsDiv } from "./StyledDashboardActions";

export default function DashboardActions() {
  return (
    <ActionsDiv>
      <Link href="/tasks/new-task">
        <ActionsButton>
          <PlusCircleIcon size={20} />
          Create Task
        </ActionsButton>
      </Link>

      <Link href="/clients">
        <ActionsButton>
          <UserCircle size={22} />
          Clients
        </ActionsButton>
      </Link>
    </ActionsDiv>
  );
}
