const Booking = require('../../models/booking.model');

const postAllBooking = async (req, res) => {
  let alert = "Here's your all booking!";
  const allBooking = await Booking.findAll();
  if (allBooking) {
    return res.send({ error: false, message: alert, allBooking });
  }
  alert = "Can't find any booking that you need!";
  return res.send({ error: true, message: alert });
};

module.exports = { postAllBooking };
