module.exports = (sequelize, Datatypes) => {
  const Room = sequelize.define('Room', {
    roomId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    cinemaId: {
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
    },
    columnSize: {
      type: Datatypes.INTEGER,
    },
  });

  Room.associate = (models) => {
    Room.belongsTo(models.Cinema, {
      foreignKey: 'cinemaId',
    });
  };

  return Room;
};
