/* eslint-disable prefer-destructuring */
const bcrypt = require('bcryptjs');
const models = require('../../models');

const saltRound = 10;

const updateInfoUser = async (req, res) => {
  const userID = res.locals.user.userID;
  const {
    password, username, phoneNumber,
  } = req.body;

  if (!password && !username && !phoneNumber) {
    return res.send({ error: true, message: 'Please fill out all requirement fields' });
  }
  const user = await models.User.findOne({
    where: {
      userID,
    },
  });

  const dataUpdate = {};

  if (password) {
    await bcrypt.hash(password, saltRound).then((hash) => {
      dataUpdate.password = hash;
    });
  }
  if (username) {
    dataUpdate.username = username;
  }
  if (phoneNumber) {
    dataUpdate.phoneNumber = phoneNumber;
  }
  await user.update({
    ...dataUpdate,
  });

  return res.send({ error: false, message: 'Update data successful.' });
};

module.exports = { updateInfoUser };
