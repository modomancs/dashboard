import useSWR from "swr";

export default function DashboardPage() {
  const { data: tasks, error, isLoading } = useSWR("/api/tasks");
  if (error) {
    return <p>Failed to load tasks...</p>;
  }
  if (isLoading) {
    return <p>Loading tasks...</p>;
  }
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
