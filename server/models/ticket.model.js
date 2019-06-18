module.exports = (sequelize, Datatypes) => {
  const Ticket = sequelize.define('Ticket', {
    ticketID: {
      type: Datatypes.UUID,
      primaryKey: true,
      defaultValue: Datatypes.UUIDV4,
    },
    bookingID: {
      type: Datatypes.UUID,
      allowNull: false,
    },
    rowOfSeatID: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    colOfSeatID: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  return Ticket;
};
