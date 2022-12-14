import { useRef } from 'react';
import { calculatorButtons } from '../utils/data';
import { Button } from './Button';

export function Calculator() {
  const inputRef = useRef('');

  const handleButtonChange = (event) => {
    console.log(event);

    const value = event.target.innerText;

    if (value === '÷') {
      inputRef.current.value += '/';
      return;
    }

    if (value === 'x') {
      inputRef.current.value += '*';
      return;
    }

    if (value === 'AC') {
      inputRef.current.value = '';
      return;
    }

    if (value === '+/-') {
      inputRef.current.value *= -1;
      return;
    }

    if (inputRef.current.value === '0') {
      inputRef.current.value = value;
    } else {
      inputRef.current.value += value;
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <input
        ref={inputRef}
        placeholder="0"
        type="text"
        className="border border-gray-300 px-4 py-2 text-right text-5xl rounded-lg w-full overflow-ellipsis"
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
