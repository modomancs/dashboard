import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header>
      <Link href="/dashboard">Task Manager</Link>
      {session && (
        <div>
          <span>{session.companyName}</span>
          <button type="button" onClick={() => signOut({ callbackUrl: "/" })}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
