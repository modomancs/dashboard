import Link from "next/link";
import styled from "styled-components";

export const AuthWrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: 40px 16px;
`;
export const AuthCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
`;
export const AuthTitle = styled.h1`
  margin: 0 0 6px 0;
  font-size: 22px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;
export const AuthSubtitle = styled.p`
  margin: 0 0 18px 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
`;
export const AuthForm = styled.form`
  display: grid;
  gap: 12px;
`;
export const AuthLabel = styled.label`
  display: grid;
  gap: 8px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
`;
export const AuthInput = styled.input`
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
export const AuthButton = styled.button`
  margin-top: 4px;
  width: 100%;
  padding: 11px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
export const AuthError = styled.p`
  margin: 8px 0 0 0;
  font-size: 13px;
  color: rgba(239, 68, 68, 0.9);
`;
export const AuthHint = styled.p`
  margin: 14px 0 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
`;
export const AuthLink = styled(Link)`
  color: rgba(255, 255, 255, 0.92);
  text-decoration: underline;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
