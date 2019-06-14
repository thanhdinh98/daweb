import Poster from '../MovieDetail/poster';
import Detail from '../MovieDetail/details';
import Trailer from '../MovieDetail/trailer';

const DetailPage = movie => `
    <div class='body-movie'>
      <div class="title-info text-center"><b>Movie infomation</b></div>
      <div class='row'>
        <div class='col-5'>
          ${Poster(movie.poster, movie.movieID)}
        </div>
        <div class-'col-7'>
          <div class='movie-introduce'>
          
  ${Detail({
    title: movie.nameMovie,
    genre: movie.genre,
    release: movie.release,
    description: movie.description,
    duration: movie.duration,
  })}
          </div>
          <div class='trailer text-center'>
            ${Trailer(movie.trailer)}
          </div>
        </div>
      </div>
    </div>
  `;

export default DetailPage;
