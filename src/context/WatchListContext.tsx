import { type Film } from '@/types/Film';
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchFilms } from '@/api/films';

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
  const { data: serverFilms, isLoading, isError } = useQuery({
  queryKey: ['films'],
  queryFn: fetchFilms,
});

  const [clientFilms, setClientFilms] = useState<Film[]>([]);

  const addFilm = (newFilm: Film) => {
    setClientFilms([...clientFilms, newFilm]);
  };

  const removeFilm = (id: string) => {
    setClientFilms(clientFilms.filter((film) => film.id !== id));
  };

  const toggleWatched = (id: string) => {
    setClientFilms(
      clientFilms.map((film) => {
        if (film.id === id) {
          return { ...film, watched: !film.watched };
        } else return film;
      })
    );
  };

  const markAllAsWatched = () => {
    setClientFilms(
      clientFilms.map((film) => {
        return { ...film, watched: true };
      })
    );
  };

  useEffect(() => {
  if (serverFilms) setClientFilms(serverFilms);
}, [serverFilms]);

  return (
    <WatchlistContext.Provider
      value={{ films: clientFilms, isLoading, isError, addFilm, removeFilm, toggleWatched, markAllAsWatched }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchList() {
  return useContext(WatchlistContext);
}
