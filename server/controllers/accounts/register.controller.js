const bcrypt = require('bcryptjs');
const models = require('../../models');

const saltRound = 10;

const postRegister = async (req, res) => {
  let alert = 'Thank you for your register!';
  const {
    inputEmail, inputPassword, inputConfirmPassword, name, phoneNumber, permission,
  } = req.body;

  if (inputConfirmPassword === inputPassword) {
    const user = await models.User.findOne({
      where: {
        email: inputEmail,
      },
    });

    if (!user) {
      await bcrypt.hash(inputConfirmPassword, saltRound).then(async (hash) => {
        await models.User.create({
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
