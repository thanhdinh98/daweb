const models = require('../../models');

const allRoom = async (req, res) => {
  let alert = "Here's all your room!";
  const { cinemaID } = req.body;
  const room = await models.Room.findAll({
    where: {
      cinemaID,
    },
  });
  if (room) {
    return res.send({ error: false, message: alert, room });
  }
  alert = "Can't find any rooms that you need.";
  return res.send({ error: true, message: alert });
};

module.exports = { allRoom };
