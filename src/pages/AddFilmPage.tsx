import { useWatchList } from "@/context/WatchListContext";
import { FilmForm } from "@/components/FilmForm";

export function AddFilmPage(){
    const { addFilm } = useWatchList();

    return(
        <FilmForm onAddFilm={addFilm}></FilmForm>
    );
}