import { useWatchList } from "@/context/WatchListContext";
import { FilmForm } from "@/components/FilmForm";

export function AddFilmPage(){
    const { films, addFilm, removeFilm, toggleWatched, markAllAsWatched } = useWatchList();

    return(
        <FilmForm onAddFilm={addFilm}></FilmForm>
    );
}