const Ticket = require('../../models/ticket.model');

const postAllTicket = async (req, res) => {
  let alert = "Here's your all ticket.";
  const allTicket = await Ticket.findAll();
  if (allTicket) {
    return res.send({ error: false, message: alert, allTicket });
  }

  alert = "Can't find any ticket you need.";
  return res.send({ error: true, message: alert });
};

module.exports = { postAllTicket };
