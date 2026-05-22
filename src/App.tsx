import { useState } from 'react';
import FilmCard from './components/FilmCard';
import type { Film } from './types/Film';
import { ThemeButton } from './components/ThemeButton';
import { Komponenta } from './components/Komponenta';
import { useWatchList } from './context/WatchListContext';
import { FilmForm } from './components/FilmForm';

function App() {
  const { films, addFilm, removeFilm, toggleWatched, markAllAsWatched } = useWatchList();

  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <div className="absolute top-4 right-4">
        <ThemeButton />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Film Watchlist - Zhlédnuto: {films.filter((film) => film.watched).length}
      </h1>

      <FilmForm onAddFilm={addFilm}></FilmForm>
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

export default App;
