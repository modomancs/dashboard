import styled from "styled-components";
import Link from "next/link";

export const HeaderWrapper = styled.header`
  background: #111827;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const HeaderInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled(Link)`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;

export const CompanyName = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
`;

export const HeaderButton = styled.button`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;

export const HeaderLinkButton = styled(Link)`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
`;
