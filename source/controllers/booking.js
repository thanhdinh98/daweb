import services from '../services';
import { END_POINTS } from '../helpers/constants';

export default {
  getSeatsMovie: showtimeID => services.send(END_POINTS.BOOKING.SEATS, {
    type: 'json',
    body: {
      showtimeID,
    },
  }),

  booking: (showtimeID, seats) => services.send(END_POINTS.BOOKING.BOOKING, {
    type: 'json',
    body: {
      showtimeID,
      seats,
    },
  }),
};
