const bcrypt = require('bcryptjs');
const models = require('../../models');

const saltRound = 10;

const postUpdateProfile = async (req, res) => {
  let alert = 'Updated successful.';
  const {
    inputCurrentPassword, inputPassword, inputConfirmPassword, inputName, inputPhone,
  } = req.body;

  if (inputConfirmPassword === inputPassword) {
    const findUser = models.User.findOne({
      where: {
        email: req.session.email,
      },
    });

    if (findUser) {
      // eslint-disable-next-line max-len
      const comparePassword = await bcrypt.compare(inputCurrentPassword, findUser.dataValues.password);

      if (comparePassword) {
        await bcrypt.hash(inputConfirmPassword, saltRound).then(async (hash) => {
          await models.User.update({
            name: inputName,
            phoneNumber: inputPhone,
            password: hash,
          });
        });
        return res.send({ error: false, message: alert });
      }
    }
    alert = 'Cannot find user!';
    return res.send({ error: true, message: alert });
  }
  alert = "Your password and confirm password didn't match!";
  return res.send({ error: true, message: alert });
};

module.exports = { postUpdateProfile };
