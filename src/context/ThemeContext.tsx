import { createContext } from "react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";

export type ThemeContextType = { theme: 'light' | 'dark'; toggle: () => void };

export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggle = () => setTheme((t) => t === 'light' ? 'dark' : 'light');

  useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );

}


