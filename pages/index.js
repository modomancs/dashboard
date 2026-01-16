import {
  HomeActions,
  HomeCard,
  HomeDescription,
  HomeList,
  HomeListItem,
  HomePrimaryLink,
  HomeSecondaryLink,
  HomeSectionTitle,
  HomeTitle,
  HomeWrapper,
} from "@/components/HomePageStyles/StyledHomePage";
import { PageContainer, PageShell } from "@/components/Layout/StyledPageShell";

export default function HomePage() {
  return (
    <PageShell>
      <PageContainer>
        <HomeWrapper>
          <HomeCard>
            <HomeTitle>Task Manager</HomeTitle>
            <HomeDescription>
              A clean and modern task management application designed for
              companies to organize clients, assign tasks, and track progress in
              one place.
            </HomeDescription>

            <HomeSectionTitle>What is Task Manager used for?</HomeSectionTitle>
            <HomeList>
              <HomeListItem>Create and manage tasks for clients</HomeListItem>
              <HomeListItem>
                Track progress with simple task statuses
              </HomeListItem>
              <HomeListItem>Open task details and update info</HomeListItem>
              <HomeListItem>Manage clients inside your company</HomeListItem>
            </HomeList>
            <HomeActions>
              <HomePrimaryLink href="/login">Login</HomePrimaryLink>

              <HomeSecondaryLink href="/register">Register</HomeSecondaryLink>
            </HomeActions>
          </HomeCard>
        </HomeWrapper>
      </PageContainer>
    </PageShell>
  );
}
