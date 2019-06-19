import Button from '../Button/button';

const Movie = movie => `
  <div class="info-movie">
    <img src="${movie.poster}" class="poster-list-movie">
    <br>
    ${Button('btn-booking-list-movie', 'Booking', movie.movieID)}
    ${Button('btn-detail-list-movie', 'Detail', movie.movieID)}
    <br>
    <span class="movie-title-list-movie">${movie.nameMovie}</span>
  </div>
  `;
export default Movie;
