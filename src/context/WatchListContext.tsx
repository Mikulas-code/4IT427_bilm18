import { type Film } from '@/types/Film';
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface WatchlistContextType {
  films: Film[];
  addFilm: (film: Film) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

export const WatchlistContext = createContext<WatchlistContextType>({
  films: [],
  addFilm: () => {},
  removeFilm: () => {},
  toggleWatched: () => {},
  markAllAsWatched: () => {},
});

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [films, setFilms] = useState<Film[]>([
    { id: '1', title: 'Inception', year: 2010, genre: 'Sci-fi', rating: 9, watched: true },
    { id: '2', title: 'Interstellar', year: 2014, genre: 'Sci-fi', rating: 10, watched: false },
    { id: '3', title: 'The Dark Knight', year: 2008, genre: 'Akční', rating: 9, watched: true },
  ]);

  const addFilm = (newFilm: Film) => {
    setFilms([...films, newFilm]);
  };

  const removeFilm = (id: string) => {
    setFilms(films.filter((film) => film.id !== id));
  };

  const toggleWatched = (id: string) => {
    setFilms(
      films.map((film) => {
        if (film.id === id) {
          return { ...film, watched: !film.watched };
        } else return film;
      })
    );
  };

  const markAllAsWatched = () => {
    setFilms(
      films.map((film) => {
        return { ...film, watched: true };
      })
    );
  };

  useEffect(() => {
    const watched = films.filter((film) => film.watched).length;
    const total = films.length;
    document.title = `Watchlist (${watched} / ${total} zhlédnuto)`;
  }, [films]);

  return (
    <WatchlistContext.Provider
      value={{ films, addFilm, removeFilm, toggleWatched, markAllAsWatched }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchList() {
  return useContext(WatchlistContext);
}
