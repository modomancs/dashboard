import styled from "styled-components";

export default function Spinner() {
  return <StyledSpinner />;
}

const StyledSpinner = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: rgba(255, 255, 255, 0.9);
  animation: spin 0.8s linear infinite;
  background: transparent;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
