import { useState } from 'react';
import FilmCard from './components/FilmCard';
import type { Film } from './types/Film';
import { ThemeButton } from './components/ThemeButton';
import { Komponenta } from './components/Komponenta';
import { useWatchList } from './context/WatchListContext';
import { FilmForm } from './components/FilmForm';


function App() {

const { films, addFilm, removeFilm, toggleWatched, markAllAsWatched } = useWatchList()

  return (
    <main>
      <h1>Film Watchlist - Zhlédnuto: {films.filter((film) => film.watched).length}</h1>
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
      <button onClick={markAllAsWatched}>Označit vše jako zhlédnuté</button>
      <ThemeButton></ThemeButton>
      <Komponenta></Komponenta>

      <FilmForm onAddFilm={addFilm}></FilmForm>
    </main>
  );
}

export default App;
