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
import Spinner from "@/components/Loading/Spinner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (!response?.ok) {
      setErrorMessage("Invalid email or password");
      setIsSubmitting(false);
      return;
    }
    router.push("/dashboard");
  }
  return (
    <PageShell>
      <PageContainer>
        <AuthWrapper>
          <AuthCard>
            <AuthTitle>Login</AuthTitle>
            <AuthSubtitle>Access your company dashboard.</AuthSubtitle>
            <AuthForm onSubmit={handleSubmit}>
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
                  disabled={isSubmitting}
                />
              </AuthLabel>
              <AuthButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : "Login"}
              </AuthButton>
            </AuthForm>
            {errorMessage && <AuthError>{errorMessage}</AuthError>}
            <AuthHint>
              No account yet? <AuthLink href="/register">Register</AuthLink>
            </AuthHint>
          </AuthCard>
        </AuthWrapper>
      </PageContainer>
    </PageShell>
  );
}
