const buttonColors = {
  gray: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
  orange: 'bg-orange-500 hover:bg-orange-600 text-white',
};

const colSpans = {
    1: '',
    2: 'col-span-2',
    3: 'col-span-3',
};

function Button({ children, color = 'gray', colSpan = 1 }) {
  return (
    <button
      className={`text-xl font-bold py-4 px-4 rounded-lg ${colSpans[colSpan]} ${buttonColors[color]}}`}
    >
      {children}
    </button>
  );
}

export function Calculator() {
  return (
    <div className="max-w-xl mx-auto">
      <input
        placeholder="0"
        type="number"
        className="border border-gray-300 px-4 py-2 text-right text-5xl rounded-lg w-full overflow-ellipsis"
      />
      <div className="grid grid-cols-4 gap-2.5 mt-2">
        <Button>AC</Button>
        <Button>+/-</Button>
        <Button>%</Button>
        <Button color="orange">÷</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button color="orange">x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button color="orange">-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button color="orange">+</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button color="orange" colSpan={2}>=</Button>
      </div>
    </div>
  );
}

// export function Calculator() {
//   return (
//     <div className="max-w-xl mx-auto">
//       <input
//         placeholder="0"
//         type="number"
//         className="border px-4 py-2 text-right text-5xl rounded-t-lg w-full"
//       />
//       <div className="grid grid-cols-4 gap-1 mt-2">
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg">
//           AC
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           +/-
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           %
//         </CalculatorButton>
//         <CalculatorButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r-lg">
//           ÷
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg">
//           7
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           8
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           9
//         </CalculatorButton>
//         <CalculatorButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r-lg">
//           x
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg">
//           4
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           5
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           6
//         </CalculatorButton>
//         <CalculatorButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r-lg">
//           -
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg">
//           1
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           2
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           3
//         </CalculatorButton>
//         <CalculatorButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r-lg">
//           +
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg">
//           0
//         </CalculatorButton>
//         <CalculatorButton className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
//           .
//         </CalculatorButton>
//         <CalculatorButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r-lg">
//           =
//         </CalculatorButton>
//       </div>
//     </div>
//   );
// }
