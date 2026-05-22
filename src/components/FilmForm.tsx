import { type Film } from '@/types/Film';
import { use, useState } from 'react';

export interface FilmFormProps {
  onAddFilm: (film: Film) => void; // ← funkci pro přidání
}

export function FilmForm({ onAddFilm }: FilmFormProps) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);

  function handleSubmit() {
    const newId = crypto.randomUUID(); // ← chyběly závorky
    onAddFilm({ id: newId, title, year, genre, rating, watched: false });

    // vymaž formulář
    setTitle('');
    setYear(0);
    setGenre('');
    setRating(0);
  }

  return (
    <div>
        <label>Název</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Rok</label>
      <input value={year} onChange={(e) => setYear(Number(e.target.value))} />

      <label>Žánr</label>
      <input value={genre} onChange={(e) => setGenre(e.target.value)} />

      <label>Hodnocení</label>
      <input value={rating} onChange={(e) => setRating(Number(e.target.value))} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
