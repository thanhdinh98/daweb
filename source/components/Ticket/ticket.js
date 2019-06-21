import moment from 'moment';
import InfoField from './fieldInfo';

const Ticket = (history, ticket) => `
<div class="tickets-body">
<br>
  <div class="row ticket-info">
    <div class="col-sm-12 company">
      CGV Corporation
    </div>
  </div>
  <div class='col-sm-9'>
    ${InfoField('Cinema', history.address)}
    ${InfoField('Movie Name', history.nameMovie)}
    ${InfoField('Time', moment(history.timeBooking).format('LLL'))}
    ${InfoField('Room', history.room)}
    ${InfoField('Type', history.type)}
    ${InfoField('Price', ticket.price)}
    ${InfoField('Seats', String.fromCharCode((`${ticket.rowOfSeatID}`).charCodeAt(0) + 17) + (ticket.colOfSeatID + 1))}
  </div>
</div>
  `;
export default Ticket;
