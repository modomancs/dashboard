import styled from "styled-components";
import { PageContainer, PageShell } from "../Layout/StyledPageShell";

export default function PageError({ message = "Failed to load data..." }) {
  return (
    <PageShell>
      <PageContainer>
        <ErrorText>{message}</ErrorText>
      </PageContainer>
    </PageShell>
  );
}
const ErrorText = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(239, 68, 68, 0.9);
  text-align: center;
`;
