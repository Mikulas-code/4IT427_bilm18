import { useState } from 'react';
import type { Film } from '../types';
import { useEffect } from 'react';

export function useWatchList(initialFilms: Film[]) {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  const handleToggleWatched = (title: string) => {
    setFilms(
      films.map((film) => {
        if (film.title === title) {
          return { ...film, watched: !film.watched };
        } else {
          return film;
        }
      })
    );
  };

  useEffect(() => {
    const watched = films.filter((film) => film.watched).length;
    const total = films.length;
    document.title = `Watchlist (${watched} / ${total} zhlédnuto)`;
  }, [films]);

  const handleMarkAllWatched = () => {
    setFilms(films.map((film) => ({ ...film, watched: true })));
  };

  return { films, handleToggleWatched, handleMarkAllWatched };
}
