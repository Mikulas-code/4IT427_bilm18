import { type Film } from '@/types/Film';
import { use, useState } from 'react';

export interface FilmFormProps {
  onAddFilm: (film: Film) => void; // ← funkci pro přidání
}

export function FilmForm({ onAddFilm }: FilmFormProps) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  function handleSubmit() {
    const newId = crypto.randomUUID();
    onAddFilm({ id: newId, title, year: Number(year), genre, rating: Number(rating), watched: false });

    setTitle('');
    setYear('');
    setGenre('');
    setRating('');
  }

  return (
  <div className="mb-6 p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
    <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Přidat film</h2>
    <div className="flex gap-2 mb-3">
      <input
        className="border rounded px-3 py-1 flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Název"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border rounded px-3 py-1 w-24 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Rok"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        className="border rounded px-3 py-1 flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Žánr"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        className="border rounded px-3 py-1 w-32 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Hodnocení"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
    </div>
    <button 
      onClick={handleSubmit}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
    >
      Přidat film
    </button>
  </div>
);
}
