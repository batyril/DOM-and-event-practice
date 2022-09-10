export function createWatchFilm(film, number, place) {
  place.insertAdjacentHTML("beforeend", `
            <li class="promo__interactive-item">${ number+1}. ${film}
              <div class="delete"></div>
          </li>
  `)
}
