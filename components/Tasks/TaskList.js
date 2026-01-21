import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import {
  Column,
  ColumnHeader,
  ColumnList,
  ColumnsGrid,
  ColumnTitle,
  CountBadge,
  Dot,
} from "./StyledTaskColumns";
import {
  FiltersBar,
  FilterGroup,
  FilterLabel,
  FilterInput,
  FilterSelect,
} from "./StyledTaskFilters";

export default function TaskList({ tasks, clients }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [clientFilter, setClientFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    if (!tasks) return [];

    const query = search.trim().toLowerCase();

    return tasks.filter((task) => {
      const client = clients?.find((c) => c._id === task.clientId);
      const clientName = client?.name?.toLowerCase() || "";

      const matchesSearch =
        !query ||
        (task.title || "").toLowerCase().includes(query) ||
        (task.description || "").toLowerCase().includes(query) ||
        clientName.includes(query);

      const matchesStatus =
        statusFilter === "all" ? true : task.status === statusFilter;

      const matchesClient =
        clientFilter === "all" ? true : task.clientId === clientFilter;

      const matchesPriority =
        priorityFilter === "all" ? true : task.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesClient && matchesPriority;
    });
  }, [tasks, clients, search, statusFilter, clientFilter, priorityFilter]);

  const todoTasks = filteredTasks.filter((task) => task.status === "todo");
  const inProgressTasks = filteredTasks.filter(
    (task) => task.status === "in_progress"
  );
  const doneTasks = filteredTasks.filter((task) => task.status === "done");

  return (
    <>
      <FiltersBar>
        <FilterGroup>
          <FilterLabel htmlFor="search">Search</FilterLabel>
          <FilterInput
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Title, description, client..."
          />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="status">Status</FilterLabel>
          <FilterSelect
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="todo">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="priority">Priority</FilterLabel>
          <FilterSelect
            id="priority"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="client">Client</FilterLabel>
          <FilterSelect
            id="client"
            value={clientFilter}
            onChange={(e) => setClientFilter(e.target.value)}
          >
            <option value="all">All</option>
            {clients?.map((client) => (
              <option key={client._id} value={client._id}>
                {client.name}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
      </FiltersBar>

      <ColumnsGrid>
        <Column>
          <ColumnHeader>
            <ColumnTitle>
              <Dot $color="#ef4444" />
              To-Do
            </ColumnTitle>
            <CountBadge>{todoTasks.length}</CountBadge>
          </ColumnHeader>
          <ColumnList>
            {todoTasks.map((task) => (
              <TaskCard key={task._id} task={task} clients={clients} />
            ))}
          </ColumnList>
        </Column>

        <Column>
          <ColumnHeader>
            <ColumnTitle>
              <Dot $color="#f59e0b" />
              In Progress
            </ColumnTitle>
            <CountBadge>{inProgressTasks.length}</CountBadge>
          </ColumnHeader>
          <ColumnList>
            {inProgressTasks.map((task) => (
              <TaskCard key={task._id} task={task} clients={clients} />
            ))}
          </ColumnList>
        </Column>

        <Column>
          <ColumnHeader>
            <ColumnTitle>
              <Dot $color="#22c55e" />
              Done
            </ColumnTitle>
            <CountBadge>{doneTasks.length}</CountBadge>
          </ColumnHeader>
          <ColumnList>
            {doneTasks.map((task) => (
              <TaskCard key={task._id} task={task} clients={clients} />
            ))}
          </ColumnList>
        </Column>
      </ColumnsGrid>
    </>
  );
}
