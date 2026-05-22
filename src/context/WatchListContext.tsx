import { type Film } from '@/types/Film';
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

interface WatchlistContextType {
  films: Film[];
  isLoading: boolean;
  isError: boolean;
  addFilm: (film: Film) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

export const WatchlistContext = createContext<WatchlistContextType>({
  films: [],
  isLoading: false,
  isError: false,
  addFilm: () => {},
  removeFilm: () => {},
  toggleWatched: () => {},
  markAllAsWatched: () => {},
});

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: () => fetch('/films.json').then((r) => r.json() as Promise<Film[]>),
  });

  const [films, setFilms] = useState<Film[]>([]);

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
    if (data) {
      setFilms(data);
    }
  }, [data]);

  return (
    <WatchlistContext.Provider
      value={{ films, isLoading, isError, addFilm, removeFilm, toggleWatched, markAllAsWatched }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchList() {
  return useContext(WatchlistContext);
}
