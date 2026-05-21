import { useState } from 'react';
import FilmCard from './components/FilmCard';
import type { Film } from './types';
import { useWatchList } from './hooks/useWatchList';


const initialFilms = [
  { title: "Inception", year: 2010, genre: "Sci-fi", rating: 9, watched: true },
  { title: "Interstellar", year: 2014, genre: "Sci-fi", rating: 10, watched: false },
  { title: "The Dark Knight", year: 2008, genre: "Akční", rating: 9, watched: true },
];

function App() {

  const { films, handleToggleWatched, handleMarkAllWatched } = useWatchList(initialFilms);

  return (
    <main>
      <h1>Film Watchlist - Zhlédnuto: {films.filter((film) => film.watched).length}</h1>
      {films.map((film) => (
        <FilmCard
          key={film.title}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={handleToggleWatched}
        />
      ))}
      <button onClick={handleMarkAllWatched}>Označit vše jako zhlédnuté</button>
    </main>
  );
}

export default App;
