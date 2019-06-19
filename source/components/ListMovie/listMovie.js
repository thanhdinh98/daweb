import Movie from './movie';

const ListMovie = (movies) => {
  let listMovie = '';
  for (const movie of movies) {
    listMovie += Movie(movie);
  }

  return `
    <div class="d-flex flex-wrap justify-content-center body-list-movie">
      ${listMovie}
    </div>
  `;
};

export default ListMovie;
