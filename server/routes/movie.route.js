const Router = require('express-promise-router');

const bookingCtrl = require('../controllers/movies/booking.controller');
const cinemaCtrl = require('../controllers/movies/cinema.controller');
const moviesCtrl = require('../controllers/movies/movie.controller');
const roomCtrl = require('../controllers/movies/room.controller');
const showtimeCtrl = require('../controllers/movies/showtime.controller');
const ticketCtrl = require('../controllers/movies/ticket.controller');
const userCtrl = require('../controllers/movies/user.controller');

const router = Router();

router.post('/all-booking', bookingCtrl.allBooking);
router.post('/all-cinema', cinemaCtrl.allCinema);
router.post('/search-cinema-by-name', cinemaCtrl.searchCinemaByName);
router.get('/get-cinema-by-movieID', cinemaCtrl.getCinemaByMovieID);
router.post('/get-all-room-by-cinemaid', cinemaCtrl.getRoomByCinemaID);
router.post('/all-movie', moviesCtrl.allMovie);
router.post('/get-movie-by-id', moviesCtrl.getMovieByID);
router.get('/search-movie-by-name', moviesCtrl.searchMovieByName);
router.get('/get-movie-by-genre', moviesCtrl.getMovieByGenre);
router.post('/all-room', roomCtrl.allRoom);
router.post('/all-showtime', showtimeCtrl.allShowTime);
// eslint-disable-next-line max-len
// router.post('/search-showtime-of-movie-belong-to-cinema', showtimeCtrl.searchShowTimeOfMovieBelongToCinema);
router.post('/all-ticket', ticketCtrl.allTicket);
router.post('/all-user', userCtrl.allUser);

module.exports = router;
