const bcrypt = require('bcryptjs');
const model = require('../../models');
const sendEmail = require('./sendemail.controller');

const saltRound = 10;

const sendLinkResetPassword = async (req, res) => {
  const { email } = req.query;

  const user = await model.User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.end({ error: true, message: 'WARNING: System occurs a authencation problem!!!' });
  }

  const domain = process.env.DOMAIN || 'http://localhost:3000/';

  let content = `<a href="${domain}/account/reset?email=${email}&token=${user.token}">here</a>`;
  content = `Click this link to reset password: ${content}`;

  await sendEmail(email, "CodeGym's CINEMA - Reset Password", '', content);
  return res.send({ error: false, message: 'Please check email to reset password.' });
};

const resetPassword = async (req, res) => {
  const { email, token } = req.query;
  const user = await model.User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.send({ error: true, message: 'Please use link in your email.' });
  }
  if (user.token !== token) {
    return res.send({ error: true, message: 'Token in link has been used or wrong.' });
  }

  const { password } = req.body;
  const newToken = Math.random().toString(36).substring(2);
  await bcrypt.hash(password, saltRound).then(async (hash) => {
    model.User.update({
      password: hash,
      token: newToken,
    });
  });

  return res.send({ error: false, message: 'Your password has been changed successfully!' });
};

module.exports = { sendLinkResetPassword, resetPassword };
