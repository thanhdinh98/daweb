const Sequelize = require('sequelize');
const models = require('../../models');

const allShowTime = async (req, res) => {
  let alert = "Here's your all showtimes.";
  const showtime = await models.Showtime.findAll({
    where: {
      startTime: {
        $gte: Sequelize.fn('NOW'),
      },
    },
  });

  if (showtime) {
    return res.send({ error: false, message: alert, showtime });
  }

  alert = "Can't find any movies that equal to your selections";
  return res.send({ error: true, message: alert });
};

module.exports = { allShowTime };
