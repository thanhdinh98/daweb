import services from '../services';
import { END_POINTS } from '../helpers/constants';

export default {
  getAllMovies: () => services.send(END_POINTS.MOVIE.GET_ALL, {
    type: 'json',
    body: {},
  }),

  getMovieByID: id => services.send(END_POINTS.MOVIE.GET_MOVIE_BY_ID, {
    type: 'json',
    body: {
      movieID: id,
    },
  }),
};
