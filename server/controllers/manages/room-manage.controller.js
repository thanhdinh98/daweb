const Sequelize = require('sequelize');
const models = require('../../models');

// eslint-disable-next-line prefer-destructuring
const Op = Sequelize.Op;

const addRoom = async (req, res) => {
  const alert = 'Add successed.';
  const {
    cinemaID, name, type, rowSize, columnSize,
  } = req.body;
  if (!name || !type || !rowSize || !columnSize) {
    return res.send({ error: true, messsage: 'Please fill out all requirement fields' });
  }
  const existedCinema = await models.Cinema.findOne({
    where: {
      cinemaID,
    },
  });

  if (!existedCinema) {
    return res.send({ error: true, messsage: 'Wrong cinema' });
  }

  const createdRoom = await models.Room.create({
    cinemaID,
    name,
    type,
    rowSize,
    columnSize,
  });

  if (!createdRoom) {
    return res.send({ error: true, messsage: 'Failed to add room.' });
  }
  return res.send({ error: false, messsage: alert });
};


const delRoom = async (req, res) => {
  const { cinemaID, roomID } = req.body;

  if (!cinemaID || !roomID) {
    return res.send({ error: true, messsage: 'Fill out all requirement field' });
  }

  const findRoom = await models.Room.findOne({
    where: {
      cinemaID,
      [Op.and]: {
        roomID,
      },
    },
  });
  if (!findRoom) {
    return res.send({ error: true, messsage: 'Cannot find room' });
  }

  await models.Room.destroy({
    where: {
      cinemaID,
      [Op.and]: {
        roomID,
      },
    },
  });

  return res.send({ error: false, messsage: 'Successed room created' });
};

module.exports = { addRoom, delRoom };
