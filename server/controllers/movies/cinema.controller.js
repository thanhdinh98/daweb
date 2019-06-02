const Cinema = require('../../models/cinema.model');

const postAllCinema = async (req, res) => {
  let alert = "Here's all your cinema.";
  const allCinema = await Cinema.findAll();

  if (allCinema) {
    return res.send({ error: false, message: alert, allCinema });
  }
  alert = "Can't find any selected cinema.";
  return res.send({ error: true, message: alert });
};

module.exports = { postAllCinema };
