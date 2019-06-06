const Router = require('express-promise-router');

const bookingCtrl = require('../controllers/movies/booking.controller');
const cinemaCtrl = require('../controllers/movies/cinema.controller');
const moviesCtrl = require('../controllers/movies/movie.controller');
const roomCtrl = require('../controllers/movies/room.controller');
const showtimeCtrl = require('../controllers/movies/showtime.controller');
const ticketCtrl = require('../controllers/movies/ticket.controller');
const userCtrl = require('../controllers//movies/user.controller');

const router = Router();

router.post('/booking', bookingCtrl.postAllBooking);
router.post('/cinema', cinemaCtrl.postAllCinema);
router.post('/movie', moviesCtrl.postAllMovie);
router.post('/room', roomCtrl.postAllRoom);
router.post('/showtime', showtimeCtrl.postAllShowTime);
router.post('/ticket', ticketCtrl.postAllTicket);
router.post('/user', userCtrl.postAllUser);

module.exports = router;
