const Users = require('../../models/user.model').default;

const verifyEmail = async (req, res) => {
  const { email, password } = req.query;

  const user = await Users.findOne({
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
    res.send({ error: false, message: 'Verify email successfull.' });
  }
  res.send({ error: false, message: 'Verify email fail.' });
};

module.exports = { verifyEmail };
