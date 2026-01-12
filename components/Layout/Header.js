import { signOut, useSession } from "next-auth/react";
import {
  AccountBox,
  Brand,
  CompanyName,
  HeaderButton,
  HeaderInner,
  HeaderLinkButton,
  HeaderWrapper,
  Right,
} from "./StyledHeader";

export default function Header() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Brand href={isLoggedIn ? "/dashboard" : "/"}>Task Manager</Brand>
        <Right>
          {isLoggedIn ? (
            <AccountBox>
              <CompanyName>{session.companyName}</CompanyName>
              <HeaderButton type="button" onClick={() => signOut()}>
                Logout
              </HeaderButton>
            </AccountBox>
          ) : (
            <>
              <HeaderLinkButton href="/login">Login</HeaderLinkButton>
              <HeaderLinkButton href="/register">Register</HeaderLinkButton>
            </>
          )}
        </Right>
      </HeaderInner>
    </HeaderWrapper>
  );
}
