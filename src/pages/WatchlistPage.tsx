import { useWatchList } from '@/context/WatchListContext';
import FilmCard from '@/components/FilmCard';

export function WatchlistPage() {
  const { films, isError, isLoading, removeFilm, toggleWatched, markAllAsWatched } = useWatchList();

  if(isLoading){
    return <p>Načítám...</p>
  } else if (isError){
    return <p>Chyba při načítání filmů.</p>;
  }else{
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Film Watchlist - Zhlédnuto: {films.filter((film) => film.watched).length}
      </h1>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          id={film.id}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={toggleWatched}
          onRemove={removeFilm}
        />
      ))}
      <div className="flex justify-end mt-4">
        <button
          onClick={markAllAsWatched}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Označit vše jako zhlédnuté
        </button>
      </div>
    </main>
  );
}
}
