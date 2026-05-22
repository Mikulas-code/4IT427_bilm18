import { useContext } from 'react';
import type { ThemeContextType } from '@/context/ThemeContext';
import { ThemeContext } from '@/context/ThemeContext';

export function ThemeButton() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button onClick={toggle} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
