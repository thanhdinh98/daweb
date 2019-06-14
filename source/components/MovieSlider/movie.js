const Movie = movie => `
    <div class='item' id='${movie.movieID}'>
      <img src='${movie.poster}' class='img-fluid image' />
      <div class='content'>
        <h4>${movie.nameMovie}</h4>
        <div>Genre: ${movie.genre}</div>
        <div>Duration: ${movie.duration}</div>
      </div>
    </div>
  `;

export default Movie;
