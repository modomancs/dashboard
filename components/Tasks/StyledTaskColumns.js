import styled from "styled-components";

export const Column = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
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
  font-size: 16px;
  font-weight: 600;
`;

export const CountBadge = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
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
