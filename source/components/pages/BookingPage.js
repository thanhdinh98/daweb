import Guide from '../Booking/guide';
import Seats from '../Booking/seats';
import selectField from '../Form/selectField';
import SubmitBookButton from '../Button/submitBook';

import { ID } from '../../helpers/constants';

const BookingPage = ({ movie }) => `
  <div class="booking-page">
  <div class="booking-title">
    <span>Booking</span>
  </div>
  <div class="movie-name">
    ${movie.nameMovie}
  </div>
  <center>
    <div class="row movie-booking-body">
      <div class="col-sm-4">
  ${selectField({
    id: 'cinema',
    name: 'Cinema',
    options: [{ name: 'Thanh', id: 1 }],
  })}
      </div>
      <div class="col-sm-4">
  ${selectField({
    id: 'date',
    name: 'Date',
    options: [],
  })}
      </div>
      <div class="col-sm-4">
  ${selectField({
    id: 'time',
    name: 'Time',
    options: [],
  })}
      </div>
    </div>
    <div>
      ${Seats()}
    </div>
    <div class="guide">
      ${Guide('empty', 'guide-not-book')}
      ${Guide('booking', 'guide-booking')}
      ${Guide('booked', 'guide-booked')}
    </div>
      ${SubmitBookButton(ID.BUTTON.SUBMIT_BOOK)}
  </center>
</div>
  `;

export default BookingPage;
