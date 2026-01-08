import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";

export default function CreateClientForm() {
  const { mutate } = useSWR("/api/clients");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { data: session } = useSession();

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    setSuccessMessage("");
    if (!session?.companyId) {
      setSubmitError("You must be logged in.");
      return;
    }
    const formData = new FormData(event.target);
    const clientData = Object.fromEntries(formData);
    clientData.createdAt = new Date().toISOString();
    const response = await fetch("/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      setSubmitError("Failed to create client");
      return;
    }
    setSuccessMessage("Client has been created!");
    mutate();
    event.target.reset();
  }
  return (
    <div>
      <h2>Create client</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Client Name
          <input id="name" name="name" type="text" required />
        </label>

        <button type="submit">Submit</button>
        {submitError && <p>{submitError}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
}
