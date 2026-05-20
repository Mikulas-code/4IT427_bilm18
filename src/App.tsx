import { useState } from 'react'
import FilmCard from './components/FilmCard'


function App() {

  const [filmy, setFilmy] = useState([
    { title: 'Sam doma', year: 1999, genre: 'Neco', rating: 4.2, watched: true },
    { title: 'Sam doma 2', year: 2003, genre: 'Neco', rating: 8, watched: true },
    { title: 'Sam doma 3', year: 2005, genre: 'Neco', rating: 9, watched: true },
  ]);


  const handleToggleWatched = (title: string) => {
    setFilmy(predchoziFilmy =>
      predchoziFilmy.map(film =>
        film.title === title 
          ? { ...film, watched: !film.watched }
          : film
      )
    );
  };


  return (
    <>
      {filmy.map(film => (
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
    </>
  );
}


export default App
