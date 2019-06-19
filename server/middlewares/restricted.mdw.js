/* eslint-disable consistent-return */
module.exports = (req, res, next) => {
  if (!req.currentUser) {
    return res.send({ error: true, message: 'Invalid account.' });
  }
  next();
};
