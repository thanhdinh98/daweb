const Movie = movie => `
    <div class='item' data-id='${movie.movieID}'>
      <img src='${movie.poster}' class='img-fluid image' />
      <div class='content'>
        <h4>${movie.nameMovie}</h4>
        <div>Genre: ${movie.genre}</div>
        <div>Duration: ${`${movie.duration} minutes`}</div>
      </div>
    </div>
  `;

export default Movie;
