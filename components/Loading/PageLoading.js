import styled from "styled-components";
import Spinner from "./Spinner";
import { PageContainer, PageShell } from "../Layout/StyledPageShell";

export default function PageLoading() {
  return (
    <PageShell>
      <PageContainer>
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      </PageContainer>
    </PageShell>
  );
}
const LoadingWrapper = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;
