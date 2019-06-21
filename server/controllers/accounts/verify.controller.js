const models = require('../../models');

const verifyEmail = async (req, res) => {
  const { email, token } = req.query;

  const user = await models.User.findOne({
    where: {
      email,
      token,
    },
  });

  const newToken = Math.random().toString(36).substring(2);
  if (user) {
    await user.update({
      permission: 1,
      token: newToken,
    });
    return res.send({ error: false, message: 'Verify email successfully.' });
  }
  return res.send({ error: true, message: 'Verify email fail.' });
};

module.exports = { verifyEmail };
