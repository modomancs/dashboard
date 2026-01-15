import styled from "styled-components";
import Link from "next/link";

export const ListTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;

export const List = styled.div`
  display: grid;
  gap: 10px;
`;

export const ClientItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);

  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;

  transition: transform 120ms ease, background 120ms ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const ClientName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.92);
`;

export const ClientMeta = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
`;
