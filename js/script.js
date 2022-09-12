import {UI} from "./UI.js";
import {renderWatchFilm} from "./renderWatchFilm.js";
import {addNewFilm} from "./addNewFilm.js";
import {deleteFilmFromUI} from "./deleteFilmFromUI.js";
import {movieDB} from "./movieDB.js";

UI.PROMO_IMG.forEach(img => img.remove())

UI.FILM_GENRE.textContent = 'драма'

UI.FILM_IMG.style.backgroundImage = 'url(\'../img/bg.jpg\')'

renderWatchFilm(UI.FILM_LIST,movieDB.movies)

UI.ADD_FILM.addEventListener('click',addNewFilm)

UI.FILM_LIST.addEventListener('click',deleteFilmFromUI)
