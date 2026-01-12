import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 0 16px;
`;

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 520px;
    align-items: start;
  }
`;

export const BottomSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 24px;

  width: 100%;
  max-width: 520px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
