const bcrypt = require('bcryptjs');
const models = require('../../models');

const postLogin = async (req, res) => {
  let alert = 'Login successfull.';
  const { inputEmail, inputPassword } = req.body;

  if (!inputEmail || !inputPassword) {
    alert = 'Please fill out all required fields.';
    res.send({ error: true, message: alert });
  }

  const user = await models.User.findOne({
    where: {
      email: inputEmail,
    },
  });

  if (user) {
    const comparePassword = await bcrypt.compare(inputPassword, user.dataValues.password);
    if (comparePassword) {
      req.session.email = inputEmail; // req.session.optin -> option is any thing you want.
      res.send({ error: false, user });
    } else {
      alert = "Your email or password didn't correct.";
      res.send({ error: true, message: alert });
    }
  }
};

module.exports = { postLogin };
