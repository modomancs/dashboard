import styled from "styled-components";

export const FiltersBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 16px;
  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: end;
  }
`;

export const FilterGroup = styled.div`
  display: grid;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
`;

export const FilterInput = styled.input`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
  &:focus {
    border-color: rgba(255, 255, 255, 0.22);
  }
`;

export const FilterSelect = styled.select`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
  &:focus {
    border-color: rgba(255, 255, 255, 0.22);
  }
`;
