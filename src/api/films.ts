import { type Film } from "@/types/Film";

export const fetchFilms = async (): Promise<Film[]> => {
  const res = await fetch('/films.json');
  
  if (!res.ok) {
    throw new Error(`Chyba při načítání: ${res.status}`);
  }
  
  return res.json();
};