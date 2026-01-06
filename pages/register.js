import { useRouter } from "next/router";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      setErrorMessage(result.message || "Registration failed");
      return;
    }
    router.push("/login");
  }

  return (
    <div>
      <h1>Register Company</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Company name
          <input id="name" name="name" required />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" name="password" type="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
