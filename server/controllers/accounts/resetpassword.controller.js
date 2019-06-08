const bcrypt = require('bcryptjs');
const Users = require('../../models/user.model').default;
const sendEmail = require('./sendemail.controller');

const saltRound = 10;

const sendLinkResetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    res.end({ error: true, message: 'WARNING: System occurs a authencation problem!!!' });
  }

  const domain = process.env.DOMAIN || 'http:localhost:5000/';
  let content = `${domain}reset?email=${email}&token=${user.token}`;
  content = `Click this link to reset password: ${content}`;

  await sendEmail(email, 'CINEMA - Reset Password', content, '');
  return res.send({ error: false, message: 'Please check email to reset password.' });
};

const resetPassword = async (req, res) => {
  const { email, token } = req.query;
  const user = await Users.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.send({ error: true, message: 'Please use link in your email.' });
  }
  if (user.token !== token) {
    return res.send({ error: true, message: 'Token in link was used or wrong.' });
  }

  const { password } = req.body;
  const newToken = Math.random().toString(36).substring(2);
  await bcrypt.hash(password, saltRound).then(async (hash) => {
    user.update({
      password: hash,
      token: newToken,
    });
  });

  return res.send({ error: false, message: 'Change password successfully!' });
};


module.exports = { sendLinkResetPassword, resetPassword };
