import styled from "styled-components";

export const Column = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 16px;
  min-height: 260px;
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ColumnTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  text-align: center;
`;

export const CountBadge = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.85);
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  margin-right: 8px;
  background: ${(props) => props.$color};
`;

export const ColumnList = styled.div`
  display: grid;
  gap: 10px;
`;
