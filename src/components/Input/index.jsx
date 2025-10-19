import { InputContainer, HistoryDisplay } from './styles';

const Input = ({ value, history = '', operation = '' }) => {
  return (
    <InputContainer>
      <HistoryDisplay>{history}{operation ? ` ${operation}` : ''}</HistoryDisplay>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;