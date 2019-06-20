/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
const whoami = async (req, res) => {
  const user = res.locals.user;
  if (!user) {
    return res.send({ error: true, message: 'Invalid whoami.' });
  }

  res.send({ error: false, user });
};

module.exports = { whoami };
