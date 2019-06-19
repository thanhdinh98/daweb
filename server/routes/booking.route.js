const Router = require('express-promise-router');
const bookingCtrl = require('../controllers/booking/bookmovie.controller');
const restricted = require('../middlewares/restricted.mdw');

const router = Router();


router.post('/selected', bookingCtrl.selectedShowtime);
router.post('/', restricted, bookingCtrl.bookingMovie);
router.post('/tran', restricted, bookingCtrl.bookingMovieTransaction);


module.exports = router;
