import { useState } from 'react';
import { calculatorButtons } from '../utils/data';
import { Button } from './Button';
import { ARITHMETIC_OPERATORS, OPERATORS } from '../utils/constants';

export function Calculator() {
  const [firstValue, setFirstValue] = useState(null);
  const [inputValue, setInputValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);
  const [history, setHistory] = useState([]);

  function calculateResult() {
    if (!firstValue || !operator) return;
    const secondValue = inputValue;

    let result;
    switch (operator) {
      case OPERATORS.ADD:
        result = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case OPERATORS.SUBTRACT:
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case OPERATORS.MULTIPLY:
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case OPERATORS.DIVIDE:
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;
      default:
        break;
    }
    console.log({ result, operator, firstValue, secondValue });
    setInputValue(result.toString());

    setHistory((prevHistory) => [
      ...prevHistory,
      `${firstValue} ${operator} ${secondValue} = ${result}`,
    ]);
  }

  const handleButtonPressed = (event) => {
    const value = event.target.innerText;

    if (value === OPERATORS.CLEAR) {
      setInputValue('0');
      setFirstValue(null);
      setOperator(null);
      return;
    }

    if (value === OPERATORS.DELETE) {
      if (inputValue === '0') return;
      if (inputValue.length === 1) {
        setInputValue('0');
        return;
      }
      setInputValue((prevValue) => prevValue.slice(0, -1));
      return;
    }

    if (ARITHMETIC_OPERATORS.includes(value)) {
      setFirstValue(inputValue);
      setShouldReset(true);
      setOperator(value);
      return;
    }

    if (value === OPERATORS.EQUALS) {
      calculateResult();
      return;
    }

    if (value === OPERATORS.DECIMAL && inputValue.includes(OPERATORS.DECIMAL)) {
      return;
    }

    if (value === OPERATORS.PLUS_MINUS) {
      if (inputValue === '0') {
        return;
      }
      setInputValue((prevValue) => (prevValue * -1).toString());
      return;
    }

    if (inputValue === '0') {
      const newValue = value === OPERATORS.DECIMAL ? '0.' : value;
      setInputValue(newValue);
      return;
    }
    if (shouldReset) {
      setInputValue(value);
      setShouldReset(false);
      return;
    }
    setInputValue((prevValue) => prevValue + value);
  };

  return (
    <div className="max-w-xl mx-auto">
      <span className="dark:text-white">{JSON.stringify(history)}</span>
      <input
        value={inputValue}
        placeholder="0"
        type="text"
        className="border border-gray-300 px-4 py-2 text-right text-5xl rounded-lg w-full overflow-ellipsis"
        readOnly
      />
      <div className="grid grid-cols-4 gap-2.5 mt-2">
        {calculatorButtons.map((btn) => (
          <Button
            key={btn.value}
            onClick={handleButtonPressed}
            color={btn.color}
            colSpan={btn.colSpan}
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
