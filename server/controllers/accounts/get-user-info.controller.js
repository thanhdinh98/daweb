const models = require('../../models');

const getUserInfo = async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const userID = res.locals.user.userID;
  let alert = 'User information: ';
  const userInfo = await models.User.findOne({
    where: {
      userID,
    },
  });
  if (userInfo) {
    const user = {
      userName: userInfo.dataValues.username,
      phoneNumber: userInfo.dataValues.phoneNumber,
    };
    return res.send({ error: false, message: alert, user });
  }
  alert = 'Cannot find user';
  return res.send({ error: true, message: alert });
};

module.exports = { getUserInfo };
