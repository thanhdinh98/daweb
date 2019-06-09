import services from '../../services';
import { END_POINTS } from '../../helpers/constants';

const beforeRender = () => {
  const getAllCinema = () => services.send(END_POINTS.CINEMA.GET_ALL);

  const getMovieDateONCienma = (cinemaId, movieId) => {
    const data = {
      type: 'json',
      data: {
        cinemaId,
        movieId,
      },
    };

    return services.send(END_POINTS.BOOKING.DATE_ON_CIMENA, data);
  };

  const getShowtime = (cinemaId, movieId, date) => {
    const data = {
      type: 'json',
      data: {
        cinemaId,
        movieId,
        date,
      },
    };

    return services.send(END_POINTS.BOOKING.SHOW_TIME, data);
  };

  const getSeats = (cinemaId, movieId, date, time) => {
    const data = {
      type: 'json',
      data: {
        cinemaId,
        movieId,
        date,
        time,
      },
    };

    return services.send(END_POINTS.BOOKING.SEATS, data);
  };

  return {
    getAllCinema,
    getMovieDateONCienma,
    getShowtime,
    getSeats,
  };
};

const afterRender = () => {
  const params = new URLSearchParams(location.search.slice(1));

  document.querySelector('#cinema').onchange = (e) => {
    params.set('cinema', e.target.value);

    location.href = `${location.pathname}?${params}`;
  };

  document.querySelector('#date').onchange = (e) => {
    params.set('date', e.target.value);

    location.href = `${location.pathname}?${params}`;
  };

  document.querySelector('#time').onchange = (e) => {
    params.set('time', e.target.value);

    location.href = `${location.pathname}?${params}`;
  };
};

export default {
  beforeRender,
  afterRender,
};
