import styled from "styled-components";

export const DashboardWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 900px) {
    grid-template-columns: 360px 1fr;
    align-items: start;
  }
`;

export const BottomSection = styled.section`
  margin-top: 16px;
`;
export const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  display: block;
`;
export const CardTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  text-align: center;
`;
