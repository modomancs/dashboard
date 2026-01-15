import styled from "styled-components";

export default function EmptyState({ message = "No clients yet." }) {
  return <EmptyText>{message}</EmptyText>;
}
const EmptyText = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
`;
