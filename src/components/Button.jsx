const buttonColors = {
  gray: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
  orange: 'bg-orange-500 hover:bg-orange-600 text-white',
};

const colSpans = {
  1: '',
  2: 'col-span-2',
  3: 'col-span-3',
};

export function Button({ onClick, children, color = 'gray', colSpan = 1 }) {
  return (
    <button
      className={`text-xl font-bold py-4 px-4 rounded-lg ${colSpans[colSpan]} ${buttonColors[color]}}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
