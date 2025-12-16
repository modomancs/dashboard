import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f8;
`;

export const Card = styled.div`
  background: white;
  padding: 48px;
  border-radius: 14px;
  max-width: 600px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  @media (max-width: 768px) {
    padding: 36px;
  }
  @media (max-width: 480px) {
    padding: 24px;
  }
`;
export const Title = styled.h1`
  font-size: 44px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 28px;
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ULList = styled.ul`
  padding-left: 18px;
  margin-bottom: 32px;
`;
export const LiList = styled.li`
  margin-bottom: 10px;
  font-size: 15px;
  color: #333;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #111;
  color: white;
  border: none;
  padding: 14px 22px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 480px) {
    padding: 14px;
    font-size: 14px;
  }
`;
