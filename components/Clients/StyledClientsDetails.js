import styled from "styled-components";

export const ClientsDetailsPage = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export const ClientsTopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ClientsBackButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const ClientsGlassCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 16px;
  margin-top: 15px;
`;

export const ClientsTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;

export const ClientsMeta = styled.p`
  margin: 6px 0 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
`;

export const ClientsStatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 16px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ClientsStatCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  text-align: center;
`;

export const ClientsStatValue = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;
export const ClientsStatLabel = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;
export const ClientsDeleteButton = styled.button`
  margin-top: 16px;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: rgba(255, 255, 255, 0.92);
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(239, 68, 68, 0.18);
  }
`;
export const ClientsLabel = styled.label`
  margin: 0 0 6px 0;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.6);
`;

export const ClientsInput = styled.input`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.9);
`;

export const ClientsInlineForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ClientsButtonRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ClientsPrimaryButton = styled.button`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.92);
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

export const ClientsGhostButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const ClientsEditButton = styled.button`
  margin-top: 10px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;
