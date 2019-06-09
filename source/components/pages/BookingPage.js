import Guide from '../Booking/guide';
import Seats from '../Booking/seats';
import selectField from '../Form/selectField';
import SubmitBooking from '../Button/submitBooking';

const BookingPage = (rows, cols, selectedSeats) => `
  <div class="booking-page">
  <div class="booking-title">
    <span>Booking</span>
  </div>
  <div class="movie-name">
    Adventure end game
  </div>
  <center>
    <div class="row movie-booking-body">
      <div class="col-sm-4">
        ${selectField({ id: 'cinema', name: 'Cinema', options: [{ name: 'Thanh', id: 1 }] })}
      </div>
      <div class="col-sm-4">
        ${selectField({ id: 'date', name: 'Date', options: [] })}
      </div>
      <div class="col-sm-4">
        ${selectField({ id: 'time', name: 'Time', options: [] })}
      </div>
    </div>
    <div>
      ${Seats(rows, cols, selectedSeats)}
    </div>
    <div class="guide">
      ${Guide('empty', 'guide-not-book')}
      ${Guide('booking', 'guide-booking')}
      ${Guide('booked', 'guide-booked')}
    </div>
      ${SubmitBooking('submitBooking')}
  </center>
</div>
  `;

export default BookingPage;
