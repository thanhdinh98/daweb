/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
module.exports = (req, res, next) => {
  const currentUser = res.locals.user;
  if (!currentUser) {
    return res.send({ error: true, message: 'Invalid account.' });
  }
  return next();
};
