module.exports = (sequelize, Datatypes) => {
  const Cinema = sequelize.define('Cinema', {
    cinemaId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
    },
    address: {
      type: Datatypes.STRING,
    },
  });
  return Cinema;
};
