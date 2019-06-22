const models = require('../../models');

const addCinema = async (req, res) => {
  let alert = 'Cinema has been added successfully.';
  const { cinemaName, cinemaAdddress } = req.body;
  if (!cinemaName || !cinemaAdddress) {
    alert = 'Please fill out all requirement field.';
    return res.send({ error: true, message: alert });
  }

  const cinema = await models.Cinema.findOne({
    where: {
      name: cinemaName,
    },
  });
  if (!cinema) {
    await models.Cinema.create({
      name: cinemaName,
      address: cinemaAdddress,
    }).catch((err) => {
      console.log(err);
    });
    return res.send({ error: false, message: alert });
  }
  alert = 'Your cinema has been added already!';
  return res.send({ error: true, message: alert });
};

const deleteCinema = async (req, res) => {
  let alert = 'Cinema has been deleted successfully.';
  const { cinemaID } = req.body;

  if (!cinemaID) {
    alert = "Haven't received cinemaID";
    return res.send({ error: true, message: alert });
  }

  const cinema = await models.Cinema.findOne({
    where: {
      cinemaID,
    },
  });
  if (cinema) {
    await models.Cinema.destroy({
      where: {
        cinemaID,
      },
    // eslint-disable-next-line no-unused-vars
    }).catch((err) => {
    });

    return res.send({ error: false, message: alert });
  }
  alert = "Can't find any cinema match with your selection.";
  return res.send({ error: true, message: alert });
};

module.exports = { addCinema, deleteCinema };
