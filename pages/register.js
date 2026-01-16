import {
  AuthButton,
  AuthCard,
  AuthError,
  AuthForm,
  AuthHint,
  AuthInput,
  AuthLabel,
  AuthLink,
  AuthSubtitle,
  AuthTitle,
  AuthWrapper,
} from "@/components/Auth/StyledAuthPage";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";
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
    <PageShell>
      <PageContainer>
        <AuthWrapper>
          <AuthCard>
            <AuthTitle>Register</AuthTitle>
            <AuthSubtitle>
              Create a company account to start managing your tasks and clients.
            </AuthSubtitle>
            <AuthForm onSubmit={handleSubmit}>
              <AuthLabel htmlFor="name">
                Company name
                <AuthInput id="name" name="name" required />
              </AuthLabel>
              <AuthLabel htmlFor="email">
                Email
                <AuthInput id="email" name="email" type="email" required />
              </AuthLabel>
              <AuthLabel htmlFor="password">
                Password
                <AuthInput
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </AuthLabel>
              <AuthButton type="submit">Register</AuthButton>
            </AuthForm>
            {errorMessage && <AuthError>{errorMessage}</AuthError>}
            <AuthHint>
              Already registered? <AuthLink href="/login">Login</AuthLink>
            </AuthHint>
          </AuthCard>
        </AuthWrapper>
      </PageContainer>
    </PageShell>
  );
}
