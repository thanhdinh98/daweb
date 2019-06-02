module.exports = (sequelize, Datatypes) => {
  const Ticket = sequelize.define('Ticket', {
    ticketId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    bookingId: {
      type: Datatypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    rowOfSeatId: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    colOfSeatId: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
  });
  return Ticket;
};
