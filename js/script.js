import {movieDB} from "./movieDB.js";
import {UI} from "./UI.js";
import {createWatchFilm} from "./createWatchFilm.js";

UI.PROMO_IMG.forEach(img => img.remove())

UI.FILM_GENRE.textContent = 'драма'

UI.FILM_IMG.style.backgroundImage = 'url(\'../img/bg.jpg\')'

UI.FILM_LIST.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film,index) => createWatchFilm(film, index, UI.FILM_LIST))

