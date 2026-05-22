interface FilmCardProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function FilmCard({
  id,
  title,
  year,
  genre,
  rating,
  watched,
  onToggleWatched,
  onRemove,
}: FilmCardProps) {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4 bg-white dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">Rok: {year}</p>
      <p className="text-gray-600 dark:text-gray-400">Žánr: {genre}</p>
      <p className="text-gray-600 dark:text-gray-400">Hodnocení: {rating}/10</p>
      {watched && <p className="text-green-600 font-medium">✓ Zhlédnuto</p>}
      <div className="mt-3 flex gap-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => onToggleWatched(id)} // ← přidej
        >
          Změnit stav
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={() => onRemove(id)} // ← přidej
        >
          Odebrat
        </button>
      </div>
    </div>
  );
}
