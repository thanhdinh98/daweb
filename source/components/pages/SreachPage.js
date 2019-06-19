import ListMovie from '../ListMovie/listMovie';

const SreachMoviePage = movies => `
  <div class="list-movie-page">
    <div class="list-movie-title">
      <span>Sreach movie</span>
    </div>
    <center>
      ${ListMovie(movies)}
    </center>
    </div>
    `;
export default SreachMoviePage;
