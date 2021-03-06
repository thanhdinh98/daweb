const END_POINTS = {
  ACCOUNT: {
    LOGIN: '/account/login',
    REGISTER: '/account/register',
    LOGOUT: '/account/logout',
    IS_LOGIN: '/account/whoami',
    VERIFY: '/account/verify',
    GET_HISTORY: '/account/get-history-of-booking',
    GET_INFO: '/account/get-user-infor',
    UPDATE: '/account/update',
    RESET_PASS: '/account/resetpass',
  },

  CINEMA: {
    GET_ALL: '/cinema',
    GET_CINEMA_BASE_ON_MOVIE: '/movie/get-cinema-by-movieID',
  },

  BOOKING: {
    DATE_ON_CIMENA: '/cinema',
    SHOW_TIME: '/cinema',
    SEATS: '/booking/selected',
    BOOKING: '/booking/',
  },

  MOVIE: {
    GET_ALL: '/movie/all-movie',
    GET_MOVIE_BY_ID: '/movie/get-movie-by-id',
    SEARCH_MOVIE: '/movie/search-movie-by-name',
    GET_MOVIE_BY_GENRE: '/movie/get-movie-by-genre',
  },
};

const ID = {
  BUTTON: {
    BOOKING: 'bookingButton',
    SUBMIT_BOOK: 'submitBookButton',
    SUMBIT_FORM: 'submitFormButton',
    DETAIL: 'detailButton',
    SEARCH: 'searchButton',
    UPDATE_INFO: 'updateInfo',
  },

  VALUE: {
    SEARCH: 'searchValue',
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
