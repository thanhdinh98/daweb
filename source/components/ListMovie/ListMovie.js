import Button from '../Button/button';

const ListMovie = movie => `
<div class="info-movie">
<img src="${movie.link}" class="poster-list-movie">
<br>
${Button("btn-booking-list-movie", 'booking', 'Booking')}
${Button("btn-detail-list-movie", 'detail', 'Detail')}
<br>
<span class="movie-title-list-movie">${movie.name}</span>	
</div>	
  `;
export default ListMovie;
