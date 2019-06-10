const models = require('../../models');

const allTicket = async (req, res) => {
  let alert = "Here's your all ticket.";
  const ticket = await models.Ticket.findAll();
  if (ticket) {
    return res.send({ error: false, message: alert, ticket });
  }

  alert = "Can't find any ticket you need.";
  return res.send({ error: true, message: alert });
};

module.exports = { allTicket };
