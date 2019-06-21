import Ticket from '../Ticket/ticket';

const listTickets = (tickets) => {
  let result = '';
  for (const ticket of tickets) {
    result += Ticket(ticket);
  }
  return result;
};

const groupTicketsByDate = (history) => {
  let result = '';
  for (const his of history) {
    result += `
    <div>
      <div><span>${his.time}</span></div>
      <div>${listTickets(his.tickets)}</div>
    </div>
  `;
  }
  return result;
};

const TicketPage = (history) => {
  const result = groupTicketsByDate(history);
  return `
    <div class="container">
    <div class="ticket-page">
      <div class="ticket-title">
        <span>History</span>
      </div>
      ${result}
    </div>
    </div>
  `;
};

export default TicketPage;
