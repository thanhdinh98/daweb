import InfoField from './fieldInfo';

const Ticket = ticket => `
<div class="tickets-body">
<br>
  <div class="row ticket-info">
    <div class="col-sm-12 company">
      CGV Corporation
    </div>
  </div>
  <div class='col-sm-9'>
    ${InfoField('Cinema', ticket.cinema)}
    ${InfoField('Movie Name', ticket.nameMovie)}
    ${InfoField('Time', ticket.time)}
    ${InfoField('Room', ticket.room)}
    ${InfoField('Seat', ticket.seat)}
    ${InfoField('Price', ticket.price)}
  </div>
</div>
  `;
export default Ticket;
