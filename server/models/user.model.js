module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Datatypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    name: {
      type: Datatypes.STRING,
    },
    phoneNumber: {
      type: Datatypes.STRING,
      unique: true,
    },
    permission: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: Datatypes.STRING,
    },
  });
  return User;
};
