import styled from "styled-components";
import Link from "next/link";

export const ClientsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 16px;
`;

export const Stack = styled.div`
  display: grid;
  gap: 16px;
`;

export const Hint = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
`;

export const HintLink = styled(Link)`
  color: rgba(255, 255, 255, 0.92);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
