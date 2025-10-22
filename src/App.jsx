import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';


import GlobalStyle from './global';
import { Container, Content, Row, Title } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${(prev === '0' || prev === 'Error') ? '' : prev}${num}`);
  }

  const handleAddDecimal = () => {
    setCurrentNumber(prev => {
      if (prev === 'Error') return '0.';
      if (prev.includes('.')) return prev;
      return `${prev}${'.'}`;
    });
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    } }

  const handleEqual = () => { // if(!firstNumber === '0' && operation) setFirstNumber(Stringn(currentNumber)); set CurrentNumber('0');
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation) {
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          default:
            break;
        }
      }
    }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    } 
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  }
  const handleDivideNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      // handle divide by zero
      if (Number(currentNumber) === 0) {
        setCurrentNumber('Error');
        setFirstNumber('0');
        setOperation('');
        return;
      }
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  }
  const handleDeleteNumber = () => {
    setCurrentNumber (prev => prev.slice (0, -1));
    if (currentNumber.length === 1) {
      setCurrentNumber ('0');
    }
  } 

  
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Title>My Calculator</Title>
        <Input 
          value={currentNumber}
          history={firstNumber !== '0' ? firstNumber : ''}
          operation={operation}
        />
        <Row>
          <Button label="x" onClick= { handleMultiplyNumbers}/>
          <Button label="/" onClick= {handleDivideNumbers}/>
          <Button label="C" onClick= {handleClear}/>
          <Button label="CE" onClick= { handleDeleteNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick= { () => handleAddNumber ('7')}/>
          <Button label="8" onClick= { () => handleAddNumber ('8')}/>
          <Button label="9" onClick= { () => handleAddNumber ('9')}/>
          <Button label="-" onClick= {handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick= { () => handleAddNumber ('4')}/>
          <Button label="5" onClick= { () => handleAddNumber ('5')}/>
          <Button label="6" onClick= { () => handleAddNumber ('6')}/>
          <Button label="+" onClick= {handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick= { () => handleAddNumber ('1')}/>
          <Button label="2" onClick= { () => handleAddNumber ('2')}/>
          <Button label="3" onClick= { () => handleAddNumber ('3')}/>
          <Button label="." onClick= {handleAddDecimal}/>
        </Row>
        <Row>
          <Button label="0" onClick= { () => handleAddNumber ('0')}/>
          <Button label="=" onClick= {handleEqual}/>
          <Button label="+" onClick= {handleSumNumbers}/>
          <Button label="CE" onClick= { handleDeleteNumber}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;