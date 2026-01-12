import styled from "styled-components";

export const ActionsDiv = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ActionsButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  color: #111827;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #f9fafb;
  }
`;
