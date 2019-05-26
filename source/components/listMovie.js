import * as _ from 'lodash';
import Movie from './movie';

const SlideMovies = (listMovies, notFirstList = true) => `
    <div class="carousel-item ${!notFirstList ? 'active' : ''}">
      <ul class='nav list-item justify-content-around'>
        ${listMovies}
      </ul>
    </div>
  `;

const ListMovies = (movies) => {
  const listSlides = [];
  let listMovies = '';
  let firstMovieIndex = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const [index, movie] of movies.entries()) {
    listMovies += Movie(movie);
    if ((index - firstMovieIndex) === 3) {
      listSlides.push(SlideMovies(listMovies, firstMovieIndex));
      listMovies = '';
      firstMovieIndex = index + 1;
    }
  }

  if (!_.isEmpty(listMovies)) {
    listSlides.push(SlideMovies(listMovies));
  }

  return `
    <div>
      <h4>Movie Selection</h4>
      <div id="slider" class="carousel slide">
        <div class="carousel-inner">
          ${listSlides.join('')}
        </div>
        <a class="carousel-control-prev" href="#slider" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  `;
};

export default ListMovies;
