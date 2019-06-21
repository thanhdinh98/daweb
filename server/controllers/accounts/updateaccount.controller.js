/* eslint-disable prefer-destructuring */
const bcrypt = require('bcryptjs');
const models = require('../../models');

const saltRound = process.env.SALT_ROUND || 10;

const updateInfoUser = async (req, res) => {
  const userID = res.locals.user.userID;
  const {
    oldPassword, newPassword, username, phoneNumber,
  } = req.body;

  if (!newPassword && !username && !phoneNumber) {
    return res.send({ error: true, message: 'Please fill out all requirement fields' });
  }
  if (newPassword && !oldPassword) {
    return res.send({ error: true, message: 'Please enter old password to change.' });
  }

  const user = await models.User.findOne({
    where: {
      userID,
    },
  });

  if (user) {
    const comparePassword = await bcrypt.compare(oldPassword, user.dataValues.password);
    if (!comparePassword) {
      return res.send({
        error: true,
        message: 'Wrong password.',
      });
    }
  }

  const dataUpdate = {};

  if (newPassword) {
    await bcrypt.hash(newPassword, saltRound).then((hash) => {
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
