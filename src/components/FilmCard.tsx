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
    <div>
      <h2>{title}</h2>

      <p>Rok: {year}</p>
      <p>Žánr: {genre}</p>
      <p>Hodnocení: {isRatingValid ? rating : 'Neplatne hodnoceni'}/10</p>
      <p>{watched && '✓ Zhlédnuto'}</p>
      <button onClick={() => onToggleWatched(id)}>Změnit stav</button>
      <button onClick={()=> onRemove(id)}>Odebrat film</button>
    </div>
  );
}
