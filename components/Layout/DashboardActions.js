import { PlusCircleIcon, UserCircle } from "lucide-react";
import {
  ActionLink,
  ActionsWrapper,
  ActionText,
  IconCircle,
} from "./StyledDashboardActions";

export default function DashboardActions() {
  return (
    <ActionsWrapper>
      <ActionLink href="/tasks/new-task">
        <PlusCircleIcon size={18} />

        <ActionText>Create Task</ActionText>
      </ActionLink>

      <ActionLink href="/clients">
        <UserCircle size={18} />

        <ActionText>Clients</ActionText>
      </ActionLink>
    </ActionsWrapper>
  );
}
