import styled from "styled-components";

export const ClientFormTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;
export const ClientForm = styled.form`
  display: grid;
  gap: 12px;
`;
export const ClientLabel = styled.label`
  display: grid;
  gap: 6px;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.6);
`;
export const ClientInput = styled.input`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.9);
  outline: none;

  &:focus {
    border-color: rgba(255, 255, 255, 0.22);
  }
`;
export const ClientPrimaryButton = styled.button`
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
export const ClientMessage = styled.p`
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
`;
export const ClientErrorMessage = styled.p`
  color: rgba(239, 68, 68, 0.9);
`;
