const models = require('../../models');

const allBooking = async (req, res) => {
  let alert = "Here's your all booking!";
  const booking = await models.Booking.findAll();
  if (booking) {
    return res.send({ error: false, message: alert, booking });
  }
  alert = "Can't find any booking that you need!";
  return res.send({ error: true, message: alert });
};

module.exports = { allBooking };
