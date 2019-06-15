module.exports = (sequelize, Datatypes) => {
  const Cinema = sequelize.define('Cinema', {
    cinemaID: {
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
  }, {
    timestamps: false,
  });

  Cinema.associate = (models) => {
    Cinema.hasMany(models.Room, {
      foreignKey: 'cinemaID',
    });
  };

  return Cinema;
};
