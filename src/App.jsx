import { useState } from 'react';
import './App.css';
import { MoonIcon } from './components/icons/MoonIcon';
import { SunIcon } from './components/icons/SunIcon';

function toggleDarkMode() {
  document.querySelector('#html-root-tag').classList.toggle('dark');
}

export default function App() {
  const [theme, setTheme] = useState('light');
  console.log('render');
  return (
    <div className="p-5 max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-between space-x-5">
      <div>
        <div className="text-2xl font-medium text-black dark:text-white">
          Calculator
        </div>
      </div>
      <button
        className="shrink-0 cursor-pointer rounded-lg border dark:bg-white hover:bg-gray-100"
        onClick={() => {
          setTheme((current) => (current === 'light' ? 'dark' : 'light'));
          toggleDarkMode();
        }}
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon></SunIcon>}
      </button>
    </div>
  );
}
