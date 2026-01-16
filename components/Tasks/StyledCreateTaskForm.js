import styled from "styled-components";

export const NewTaskFormCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 16px;
`;

export const NewTaskTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;

export const NewTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NewTaskField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

export const NewTaskInput = styled.input`
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

export const NewTaskTextarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
  resize: vertical;
  min-height: 110px;
  &:focus {
    border-color: rgba(255, 255, 255, 0.22);
  }
`;
export const NewTaskSelect = styled.select`
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

export const NewTaskButtonRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 4px;
`;
export const NewTaskPrimaryButton = styled.button`
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
export const NewTaskMessage = styled.p`
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
`;
export const NewTaskErrorMessage = styled.p`
  margin: 0;
  font-size: 13px;
  color: rgba(248, 113, 113, 0.95);
`;

export const NewTaskWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
`;
export const NewTaskPageTitle = styled.h1`
  margin: 0 0 16px 0;
  font-size: 22px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
`;
export const NewTaskHint = styled.p`
  margin: 12px 0 0 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
`;
