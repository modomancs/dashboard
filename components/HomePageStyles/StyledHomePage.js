import Link from "next/link";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px;
`;
export const HomeCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 22px;
  display: grid;
  gap: 14px;
`;
export const HomeTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 520px) {
    font-size: 24px;
  }
`;
export const HomeDescription = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.86);
`;
export const HomeList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 10px;
`;
export const HomeListItem = styled.li`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
`;
export const HomeActions = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const HomePrimaryLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

export const HomeSecondaryLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;
export const HomeSectionTitle = styled.h2`
  margin: 8px 0 0 0;
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.86);
`;
