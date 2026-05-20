interface FilmCardProps {
    title: string;
    year: number;
    genre: string;
    rating: number;
    watched: boolean;
    onToggleWatched: (title: string) => void
 }

 export default function FilmCard ({
    title,
    year,
    genre,
    rating,
    watched,
    onToggleWatched}:FilmCardProps){
    const isRatingValid = rating >=1 && rating>=10;


    return(
        <div>
            <h2>{title}</h2>

            <p>Rok: {year}</p>
            <p>Žánr: {genre}</p>
            <p>Hodnocení: {isRatingValid ? rating : "Neplatne hodnoceni"}/10</p>
            <p>{watched && "✓ Zhlédnuto"}</p>
            <button onClick={()=> onToggleWatched(title)}>Změnit stav</button>
        </div>
    )
 }  