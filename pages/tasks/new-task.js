import CreateTaskForm from "@/components/Tasks/CreateTaskForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function NewTaskPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    data: clients,
    error: clientsError,
    isLoading: clientsLoading,
  } = useSWR(session ? "/api/clients" : null);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);
  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;
  if (clientsLoading) return <p>Loading...</p>;
  if (clientsError) return <p>Failed to load data...</p>;
  return (
    <>
      <h1>Create a new Task</h1>
      <CreateTaskForm clients={clients} />
      <p>
        Dont have a client yet? Click <Link href="/clients">here</Link>
      </p>
    </>
  );
}
