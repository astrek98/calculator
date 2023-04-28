import { useState } from 'react';
import { calculatorButtons } from '../utils/data';
import { Button } from './Button';
import { ARITHMETIC_OPERATORS, OPERATORS } from '../utils/constants';

export function Calculator() {
  const [inputValue, setInputValue] = useState('0');

  const handleButtonChange = (event) => {
    const value = event.target.innerText;
    console.log({ value });

    if (value === OPERATORS.CLEAR) {
      setInputValue('0');
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
      console.log('arithmetic operator');
      // TODO
    }

    if (value === OPERATORS.EQUALS) {
      console.log('equals');
      // TODO
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
    setInputValue((prevValue) => prevValue + value);
  };

  return (
    <div className="max-w-xl mx-auto">
      <span className="dark:text-white"></span>
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
            key={btn.label}
            onClick={handleButtonChange}
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
