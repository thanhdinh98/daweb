import ListMovie from '../ListMovie/ListMovie';

const SreachMoviePage = data => `
<div class="list-movie-page">
  <div class="list-movie-title">
          <span>Sreach movie</span>
  </div>	
  <center>
      <div class="d-flex flex-wrap justify-content-center body-list-movie">
        ${ListMovie(data)}
      </div>
    </center>
  </div>
  `;
export default SreachMoviePage;