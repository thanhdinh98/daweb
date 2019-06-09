import Poster from '../MovieDetail/poster';
import Detail from '../MovieDetail/details';
import Trailer from '../MovieDetail/trailer';

const DetailPage = movie => `
    <div class='body-movie'>
      <div class="title-info text-center"><b>Movie infomation</b></div>
      <div class='row'>
        <div class='col-5'>
          ${Poster(movie.imageUrl)}
        </div>
        <div class-'col-7'>
          <div class='movie-introduce'>
            ${Detail(movie.title, movie.genre, movie.release, movie.duration)}
          </div>
          <div class='trailer text-center'>
            ${Trailer(movie.iframeUrl)}
          </div>
        </div>
      </div>
    </div>
  `;

export default DetailPage;
