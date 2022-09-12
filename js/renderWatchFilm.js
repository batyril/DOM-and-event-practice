import {UI} from "./UI.js";
import {movieDB} from "./movieDB.js";
import {createWatchFilm} from "./createWatchFilm.js";

export function renderWatchFilm(parent,films){
  parent.innerHTML = '';
  films.sort();
  films.forEach((film,index) => createWatchFilm(film, index, parent))
}


