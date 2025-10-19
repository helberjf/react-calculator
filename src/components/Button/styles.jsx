import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(145deg, #2a2d3e, #232634);
  color: #e4e6f1;
  font-size: 24px;
  font-weight: 600;
  flex: 1;
  border-radius: 12px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin: 4px;

  &:hover {
    background: linear-gradient(145deg, #2f3345, #282b3b);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;