/* eslint-disable consistent-return */
const models = require('../../models');

const whoami = async (req, res) => {
  const { email } = req.session;
  console.log(email);
  if (!email) {
    return res.send({ error: true, message: 'Invalid account.' });
  }
  const user = await models.User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    return res.send({ error: true, message: 'Invalid account.' });
  }
  const rawUser = {
    email: user.dataValues.email,
    username: user.dataValues.username,
    permission: user.dataValues.permission,
  };
  res.send({ error: false, user: rawUser });
};

module.exports = { whoami };
