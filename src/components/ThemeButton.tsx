import { useContext } from "react";
import type { ThemeContextType } from "@/context/ThemeContext"; 
import { ThemeContext } from "@/context/ThemeContext";

export function ThemeButton() {
  const { theme, toggle } = useContext(ThemeContext);
  return <button onClick={toggle}>Aktuální téma: {theme}</button>;
}