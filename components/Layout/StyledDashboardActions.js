import Link from "next/link";
import styled from "styled-components";

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
`;
export const ActionLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;
export const IconCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
export const ActionText = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
`;
