const bcrypt = require('bcryptjs');
const User = require('../../models/user.model').default;

const saltRound = 10;

const updateInfoUser = async (req, res) => {
  const {
    userId, password, username, phoneNumber,
  } = req.body;
  if (!password && !username && !phoneNumber) {
    res.send({ error: true, message: 'Please fill out requirement fields' });
  }

  const user = await User.findOne({
    where: {
      userId,
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

  res.send({ error: false, message: 'Update data successful.' });
};

module.exports = { updateInfoUser };
