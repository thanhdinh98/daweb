const END_POINTS = {
  ACCOUNT: {
    LOGIN: '/account/login',
    REGISTER: '/account/register',
    LOGOUT: '/account/logout',
  },

  CINEMA: {
    GET_ALL: '/cinema',
    GET_CINEMA_BASE_ON_MOVIE: '/movie/get-cinema-by-movieID',
  },

  BOOKING: {
    DATE_ON_CIMENA: '/cinema',
    SHOW_TIME: '/cinema',
    SEATS: '/booking/selected',
  },

  MOVIE: {
    GET_ALL: '/movie/all-movie',
    GET_MOVIE_BY_ID: '/movie/get-movie-by-id',
  },
};

const ID = {
  BUTTON: {
    BOOKING: 'booking',
    SUBMIT_BOOK: 'submitBook',
    SUMBIT_FORM: 'submitForm',
  },

  SELECT_FIELD: {
    CINEMA: 'cinema',
    DATE: 'date',
    TIME: 'time',
  },

  RENDER_CONTENT: {
    DATE_SELECT: 'dateSelect',
    TIME_SELECT: 'timeSelect',
    SEATS: 'seats',
  },
};

export {
  END_POINTS,
  ID,
};
