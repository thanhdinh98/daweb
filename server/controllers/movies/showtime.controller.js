const Sequelize = require('sequelize');
const Showtime = require('../../models/showtime.model');

const postAllShowTime = async (req, res) => {
  let alert = "Here's your all movies.";
  const allShowTime = await Showtime.findAll({
    where: {
      startTime: {
        $gte: Sequelize.NOW,
      },
      attributes: ['movieId'],
    },
  });

  if (allShowTime) {
    return res.send({ error: false, message: alert, allShowTime });
  }

  alert = "Can't find any movies that equal to your selections";
  return res.send({ error: true, message: alert });
};

module.exports = { postAllShowTime };
