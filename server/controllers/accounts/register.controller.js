const bcrypt = require('bcryptjs');
const models = require('../../models');
const sendEmail = require('./sendemail.controller');

const saltRound = 10;

const register = async (req, res) => {
  let alert = 'Thank you for your register!';
  const {
    inputEmail, inputPassword, inputConfirmPassword, username, phoneNumber,
  } = req.body;

  if (!inputEmail || !inputPassword || !inputConfirmPassword || !username || !phoneNumber) {
    alert = 'Please enter all fields';
    return res.send({ error: true, message: alert });
  }

  if (inputPassword !== inputConfirmPassword) {
    alert = "Your password and confirm password didn't match.";
    return res.send({ error: true, message: alert });
  }

  const user = await models.User.findOne({
    where: {
      email: inputEmail,
    },
  });

  if (user) {
    alert = 'Your email has been used!';
    return res.send({ error: true, message: alert });
  }

  const usedPhone = await models.User.findOne({
    where: {
      phoneNumber,
    },
  });

  if (usedPhone) {
    alert = 'Your number phone has been used!';
    return res.send({ error: true, message: alert });
  }

  const tokenGen = Math.random().toString(36).substring(2);
  await bcrypt.hash(inputConfirmPassword, saltRound).then(async (hash) => {
    await models.User.create({
      email: inputEmail,
      password: hash,
      username,
      phoneNumber,
      permission: -1,
      token: tokenGen,
    });
  });

  const domain = process.env.DOMAIN || 'http:localhost:5000';
  let content = `${domain}/api/account/verify?email=${inputEmail}&token=${tokenGen}`;
  content = `Click this link to verify account: ${content}`;

  await sendEmail(inputEmail, "CodeGym's CINEMA - Account Verification", content, '');
  return res.send({ error: false, message: alert });
};

module.exports = { register };
