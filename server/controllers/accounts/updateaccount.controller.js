const bcrypt = require('bcryptjs');
const User = require('../../models/user.model').default;

const saltRound = 10;

const updateInfoUser = async (req, res) => {
  const {
    userId, password, name, phoneNumber,
  } = req.body;
  if (password === undefined && name === undefined && phoneNumber === undefined) {
    res.send({ error: true, message: "Don't have any data change!" });
  }

  const user = await User.findOne({
    where: {
      userId,
    },
  });

  const dataUpdate = {};

  if (password) {
    await bcrypt.hash(password, saltRound).then(async (hash) => {
      dataUpdate.password = hash;
    });
  }
  if (name) {
    dataUpdate.name = name;
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
