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
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
`;

export const CardTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  text-align: center;
`;
