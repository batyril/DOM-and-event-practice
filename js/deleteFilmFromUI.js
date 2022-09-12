import {deleteFilmFromArr} from "./deleteFilmFromArr.js";
import {movieDB} from "./movieDB.js";
import {renderWatchFilm} from "./renderWatchFilm.js";
import {UI} from "./UI.js";

export function deleteFilmFromUI(event){
  if (event.target.classList.contains('delete')){
    const indexFilm = (event.target.parentNode.textContent).slice(0,1)
    deleteFilmFromArr(Number(indexFilm),movieDB.movies)
    event.target.parentNode.remove();
    renderWatchFilm(UI.FILM_LIST,movieDB.movies)
  }
}
