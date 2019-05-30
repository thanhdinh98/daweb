const users = require('../models/user.model');

// const saltRound = 10;

const getRegister = (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const alert = req.query.alert;
  res.render('register', { alert });
};

const postRegister = async (req, res) => {
  let alert = 'Thank you for your register!';
  const { inputEmail, inputPassword, inputConfirmPassword } = req.body;

  if (!inputEmail) {
    alert = 'Please enter your email!';
    return res.render('register', { alert });
  }

  if (!inputPassword || !inputConfirmPassword) {
    alert = 'Please enter your password and confirm password carefully';
    return res.render('register', { alert });
  }

  if (inputPassword !== inputConfirmPassword) {
    alert = "Your password and confirm password didn't match";
    return res.render('register', { alert });
  }

  if (inputConfirmPassword === inputPassword) {
    const user = await users.findOne({
      where: {
        email: inputEmail,
      },
    });

    // if (!user) {
    //   await bcrypt.hash(inputConfirmPassword, saltRound).then(async (hash) => {
    //     await users.create({
    //       email: inputEmail,
    //       password: hash,
    //     });
    //   });
    //   return res.redirect(`./alert=${alert}`);
    // }
    res.send(user);
  }
  return res.redirect('./alert=Your account is in use!');
};

module.exports = { getRegister, postRegister };
