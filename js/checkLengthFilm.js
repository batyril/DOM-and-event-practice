export function checkLengthFilm(film){
  return film.length > 21 ? film = film.slice(0,21) + '...' : film
}
