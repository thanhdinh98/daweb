const Room = require('../../models/room.model');

const postAllRoom = async (req, res) => {
  let alert = "Here's all your room!";
  const allRoom = await Room.findAll();
  if (allRoom) {
    return res.send({ error: false, message: alert, allRoom });
  }
  alert = "Can't find any rooms that you need.";
  return res.send({ error: true, message: alert });
};

module.exports = { postAllRoom };
