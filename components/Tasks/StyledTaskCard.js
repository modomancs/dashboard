import styled from "styled-components";
import Link from "next/link";

export const TaskCardLink = styled(Link)`
  display: block;
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    background 120ms ease,
    border-color 120ms ease;
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45);
  }
`;

export const TaskTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: rgba(255, 255, 255, 0.95);
`;

export const TaskMeta = styled.p`
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
`;

export const TaskMetaRow = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Pill = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;
