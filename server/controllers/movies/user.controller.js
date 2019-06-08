const User = require('../../models/user.model');

const postAllUser = async (req, res) => {
  let alert = "Here's your all user.";
  const allUser = User.findAll();

  if (allUser) {
    return res.send({ error: false, message: alert, allUser });
  }
  alert = "Can't find any users.";
  return res.send({ error: true, message: alert });
};

module.exports = { postAllUser };
