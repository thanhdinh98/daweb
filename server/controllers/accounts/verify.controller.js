const models = require('../../models');

const verifyEmail = async (req, res) => {
  const { email, password } = req.query;

  const user = await models.User.findOne({
    where: {
      email,
      password,
    },
  });

  const token = Math.random().toString(36).substring(2);
  if (user) {
    await user.update({
      permission: 1,
      token,
    });
    return res.send({ error: false, message: 'Verify email successfull.' });
  }
  return res.send({ error: false, message: 'Verify email fail.' });
};

module.exports = { verifyEmail };
