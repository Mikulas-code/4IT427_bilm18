import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export function Komponenta(){

    const { theme, toggle } = useContext(ThemeContext);
    return <p>{theme}</p>
}