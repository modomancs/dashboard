import styled from "styled-components";

export const Page = styled.div`
  padding: 0 16px;
`;
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

export const BackButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const DetailsCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 16px;
`;

export const DetailsTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;

export const DetailsP = styled.p`
  margin: 6px 0 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
`;
export const DetailsSection = styled.div`
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;
export const Label = styled.p`
  margin: 0 0 6px 0;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.6);
`;
export const Value = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.5;
`;
export const InlineForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DetailsSelect = styled.select`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.9);
`;
export const DetailsInput = styled.input`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.9);
`;
export const DetailsTextarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.9);
  resize: vertical;
`;
export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: stretch;
`;
export const PrimaryButton = styled.button`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.92);
  padding: 10px 12px;
  border-radius: 12px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

export const GhostButton = styled.button`
  min-height: 40px;
  padding: 10px 14px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;
export const EditButton = styled.button`
  margin-top: 10px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const DeleteButton = styled.button`
  min-height: 40px;
  padding: 10px 14px;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: rgba(255, 255, 255, 0.92);
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(239, 68, 68, 0.18);
  }
`;

export const ConfirmTextDanger = styled.p`
  margin: 8px 0 0 0;
  font-size: 13px;
  color: rgba(239, 68, 68, 0.9);
`;
