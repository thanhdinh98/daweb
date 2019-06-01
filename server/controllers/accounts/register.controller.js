const bcrypt = require('bcryptjs');
const users = require('../../models/user.model');

const saltRound = 10;

const postRegister = async (req, res) => {
  let alert = 'Thank you for your register!';
  const {
    inputEmail, inputPassword, inputConfirmPassword, name, phoneNumber, permission,
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
    const user = await users.findOne({
      where: {
        email: inputEmail,
      },
    });

    if (!user) {
      await bcrypt.hash(inputConfirmPassword, saltRound).then(async (hash) => {
        await users.create({
          email: inputEmail,
          password: hash,
          name,
          phoneNumber,
          permission,
        });
      });
      return res.send({ error: false, message: alert });
    }
  }
  alert = 'Your email has been used!';
  return res.send({ error: true, message: alert });
};

module.exports = { postRegister };
