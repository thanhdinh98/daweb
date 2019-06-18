import Guide from '../Booking/guide';
import Seats from '../Booking/seats';
import selectField from '../Form/selectField';
import SubmitBookButton from '../Button/submitBook';

import { ID } from '../../helpers/constants';

const BookingPage = ({ movie, cinema }) => `
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
        ${selectField({ id: ID.SELECT_FIELD.CINEMA, name: 'Cinema', options: cinema })}
      </div>
      <div class="col-sm-4" id='${ID.RENDER_CONTENT.DATE_SELECT}'></div>
      <div class="col-sm-4" id='${ID.RENDER_CONTENT.TIME_SELECT}'></div>
    </div>
    <div>
      ${Seats()}
    </div>
    <div class="guide">
      ${Guide('empty', 'guide-not-book')}
      ${Guide('booking', 'guide-booking')}
      ${Guide('booked', 'guide-booked')}
    </div>
    <div>
      ${SubmitBookButton(ID.BUTTON.SUBMIT_BOOK)}
    </div>
  </center>
</div>
  `;

export default BookingPage;
