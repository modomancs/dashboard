import {
  Button,
  Card,
  Description,
  LiList,
  SectionTitle,
  Title,
  ULList,
  Wrapper,
} from "@/components/HomePageStyles/StyledHomePage";
import Link from "next/link";

export default function HomePage() {
  return (
    <Wrapper>
      <Card>
        <Title>Task Manager</Title>
        <Description>
          A clean and modern task management application designed for companies
          to organize clients, assign tasks, and track progress in one place.
        </Description>

        <SectionTitle>What is Task Manager used for?</SectionTitle>
        <ULList>
          <LiList>Create and manage tasks for clients</LiList>
          <LiList>Track progress with simple task statuses</LiList>
          <LiList>View detailed task information</LiList>
          <LiList>Filter tasks by client and status</LiList>
        </ULList>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </Card>
    </Wrapper>
  );
}
