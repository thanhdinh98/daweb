const models = require('../../models');

const allCinema = async (req, res) => {
  let alert = "Here's all your cinema.";
  const cinema = await models.Cinema.findAll();

  if (cinema) {
    return res.send({ error: false, message: alert, cinema });
  }
  alert = "Can't find any selected cinema.";
  return res.send({ error: true, message: alert });
};

const searchCinemaByName = async (req, res) => {
  let alert = "Here's your cinema";
  const { cinemaName } = req.body;
  const cinema = await models.Cinema.findAll({
    where: {
      name: cinemaName,
    },
  });

  if (cinema) {
    return res.send({ error: false, message: alert });
  }
  alert = 'Cannot find any cinema that you need.';
  return res.send({ error: false, message: alert });
};

module.exports = { allCinema, searchCinemaByName };
