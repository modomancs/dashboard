import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (!response?.ok) {
      setErrorMessage("Invalid email or password");
      return;
    }
    router.push("/dashboard");
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" name="password" type="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
