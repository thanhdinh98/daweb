module.exports = (sequelize, Datatypes) => {
  const Cinema = sequelize.define('Cinema', {
    cinemaId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      default: sequelize.fn('uuid_generate_v4'),
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
