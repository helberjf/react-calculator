import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 85px;
  background: linear-gradient(180deg, #2a2d3e 0%, #1f2232 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
  margin: 0 0 20px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 0 10px -10px;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    display: block;
    font-size: 2rem;
    line-height: 1.5;
    color: white;
    text-align: right;
    outline: none;
    padding: 0;
  }
`;

export const HistoryDisplay = styled.div`
  width: 100%;
  color: #9fa3b9;
  font-size: 1.1rem;
  text-align: right;
  min-height: 1.5rem;
  margin-bottom: 4px;
  opacity: 0.8;
`;