import moment from 'moment';
import InfoField from './fieldInfo';

const Ticket = (history, ticket) => `
<div class="ticket" style='height: auto; padding:10px; margin-bottom:10px'>
<div class="tickets-body">
<br>
<div class="row">
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
  <div class="col-sm-3">
  <center>
    <img src="${ticket.qrcode}" class="qr_code">
  </center>
  </div>
</div>
</div>
</div>
  `;
export default Ticket;
