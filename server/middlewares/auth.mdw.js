const models = require('../models');

const authClient = async (req, res, next) => {
  res.locals.currentUser = null;
  const { email } = req.session;
  if (!email) {
    next();
  } else {
    const user = await models.User.findOne({
      where: {
        email,
        permission: 1,
      },
    });
    if (!user) {
      next();
    } else {
      const rawUser = {

        userID: user.userID,
        email: user.email,
        username: user.username,
        permission: user.permission,
      };
      res.locals.user = rawUser;
      next();
    }
  }
};

const authAdmin = async (req, res, next) => {
  res.locals.currentUser = null;
  const { email } = req.session;
  if (!email) {
    next();
  } else {
    const user = await models.User.findOne({
      where: {
        email,
        permission: 2,
      },
    });
    if (!user) {
      next();
    } else {
      const rawUser = {

        userID: user.userID,
        email: user.email,
        username: user.username,
        permission: user.permission,
      };
      res.locals.user = rawUser;
      next();
    }
  }
};


module.exports = { authClient, authAdmin };
