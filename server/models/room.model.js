module.exports = (sequelize, Datatypes) => {
  const Room = sequelize.define('Room', {
    roomID: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    cinemaID: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    type: {
      type: Datatypes.STRING,
    },
    rowSize: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    columnSize: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  Room.associate = (models) => {
    Room.belongsTo(models.Cinema, {
      foreignKey: 'cinemaID',
    });

    Room.hasMany(models.Showtime, {
      foreignKey: 'roomID',
    });
  };

  return Room;
};
