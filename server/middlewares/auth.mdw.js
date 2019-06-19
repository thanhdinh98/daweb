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
      req.session.emailuser = email;
      req.currentUser = user.userID;
      res.locals.currentUser = user;
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
      req.session.emailuser = email;
      req.currentUser = user.userID;
      res.locals.currentUser = user;
      next();
    }
  }
};


module.exports = { authClient, authAdmin };
