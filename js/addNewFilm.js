import {UI} from "./UI.js";
import {checkLengthFilm} from "./checkLengthFilm.js";
import {movieDB} from "./movieDB.js";
import {renderWatchFilm} from "./renderWatchFilm.js";

export function addNewFilm(event){
  event.preventDefault()
  if (UI.INPUT_ADD_FILM.value === '') {
    return
  }
  const add_film = checkLengthFilm(UI.INPUT_ADD_FILM.value);
  if (UI.CHECKBOX_FILM.checked) return console.log('Добавляем любимый фильм')
  UI.ADD_FORM.reset();
  movieDB.movies.push(add_film);
  renderWatchFilm(UI.FILM_LIST,movieDB.movies)
}
