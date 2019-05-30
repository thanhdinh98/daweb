const users = require('../models/user.model');

const getLogin = (req, res) => {
  const alert = req.query;
  res.render('login', { alert });
};

const postLogin = async (req, res) => {
  let alert = 'Login successfull';
  const { inputEmail, inputPassword } = req.body;

  if (!inputEmail || !inputPassword) {
    alert = 'Please fill out all required fields';
    res.render('login', { alert });
  }

  const user = await users.findOne({
    where: {
      email: inputEmail,
    },
  });

  if (user) {
    const comparePassword = true;
    if (comparePassword) {
      req.session.email = inputEmail; // req.session.optin -> option is any thing you want.
      res.redirect('./index');
    } else {
      alert = "Your email or password didn't correct";
      res.redirect(`../?alert=${alert}`);
    }
  }
};

module.exports = { getLogin, postLogin };
