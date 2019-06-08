const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');
const sendEmail = require('./sendemail.controller');

const saltRound = 10;

const postRegister = async (req, res) => {
  let alert = 'Thank you for your register!';
  const {
    inputEmail, inputPassword, inputConfirmPassword, name, phoneNumber,
  } = req.body;

  if (!inputEmail) {
    alert = 'Please enter your email!';
    return res.send({ error: true, message: alert });
  }

  if (!inputPassword || !inputConfirmPassword) {
    alert = 'Please enter your password and confirm password carefully.';
    return res.send({ error: true, message: alert });
  }

  if (inputPassword !== inputConfirmPassword) {
    alert = "Your password and confirm password didn't match.";
    return res.send({ error: true, message: alert });
  }

  if (inputConfirmPassword === inputPassword) {
    const user = await User.findOne({
      where: {
        email: inputEmail,
      },
    });

    let hashPassword;
    if (!user) {
      await bcrypt.hash(inputConfirmPassword, saltRound).then(async (hash) => {
        await User.create({
          email: inputEmail,
          password: hash,
          name,
          phoneNumber,
          permission: 0,
          token: Math.random().toString(36).substring(2),
        });
        hashPassword = hash;
      });


      const domain = process.env.DOMAIN || 'http:localhost:5000/';
      let content = `${domain}verify?email=${inputEmail}&password=${hashPassword}`;
      content = `Click this link to verify account: ${content}`;

      await sendEmail(inputEmail, 'CINEMA - Verify Account', content, '');
      return res.send({ error: false, message: alert });
    }
  }
  alert = 'Your email has been used!';
  return res.send({ error: true, message: alert });
};

module.exports = { postRegister };
