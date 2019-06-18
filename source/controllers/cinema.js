import services from '../services';
import { END_POINTS } from '../helpers/constants';

export default {
  getCinemaBaseOnMovie: id => services.send(END_POINTS.CINEMA.GET_CINEMA_BASE_ON_MOVIE, {
    type: 'params',
    body: {
      movieID: id,
    },
  }),
};
