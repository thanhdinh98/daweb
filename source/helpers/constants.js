const END_POINTS = {
  ACCOUNT: {
    LOGIN: '/account/login',
    REGISTER: '/account/register',
    LOGOUT: '/account/logout',
  },

  CINEMA: {
    GET_ALL: '/cinema',
  },

  BOOKING: {
    DATE_ON_CIMENA: '/cinema',
    SHOW_TIME: '/cinema',
    SEATS: '/cinema',
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
};

export {
  END_POINTS,
  ID,
};
