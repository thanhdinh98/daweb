const Router = require('express-promise-router');

const bookingCtrl = require('../controllers/booking/bookmovie.controller');

const router = Router();

router.post('/', bookingCtrl.bookingMovie);
router.post('/tran', bookingCtrl.bookingMovieTransaction);

router.post('/selected', async (req, res) => {
  const { showtimeID } = req.body;

  const isShowtime = await bookingCtrl.isValidShowtimeBooking(showtimeID);
  if (isShowtime === false) {
    return res.send({ error: true, message: 'Invalid showtime.' });
  }


  const sizeRoom = await bookingCtrl.getSizeOfRoom(showtimeID);
  // 0. empty
  // 1. booked
  const seats = Array(sizeRoom.rowSize * sizeRoom.columnSize).fill(0);

  const selectedSeat = await bookingCtrl.getSelectedSeatOfShowtime(showtimeID);

  selectedSeat.forEach((seat) => {
    const numberOrder = seat[0] * sizeRoom.columnSize + seat[1] - 1;
    seats[numberOrder] = 1;
  });

  return res.send({ error: false, seats });
});


module.exports = router;
