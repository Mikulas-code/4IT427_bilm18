import { createContext } from "react";
import type { ReactNode } from "react";
import { useState } from "react";

export type ThemeContextType = { theme: 'light' | 'dark'; toggle: () => void };

export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggle = () => setTheme((t) => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );

}


