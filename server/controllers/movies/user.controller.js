const models = require('../../models');

const allUser = async (req, res) => {
  let alert = "Here's your all user.";
  const user = await models.User.findAll();

  if (user) {
    return res.send({ error: false, message: alert, user });
  }
  alert = "Can't find any users.";
  return res.send({ error: true, message: alert });
};

module.exports = { allUser };
