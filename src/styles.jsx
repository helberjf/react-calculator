import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1f35 0%, #101428 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: min(90%, 400px);
  background: rgba(28, 32, 51, 0.95);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 25px;
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
  background: linear-gradient(135deg, #00fff7 0%, #7d7aff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;;
`;