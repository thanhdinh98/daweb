import moment from 'moment';
import Poster from '../Movie/poster';
import Trailer from '../Movie/trailer';
import InfoField from '../Movie/infoField';

import { ID } from '../../helpers/constants';

import BookingButton from '../Button/booking';

const DetailPage = movie => `
    <div class='body-movie'>
      <div class="title-info text-center"><b>Movie infomation</b></div>
      <div class='row'>
        <div class='col-5'>
          ${Poster(movie.poster, BookingButton(ID.BUTTON.BOOKING, movie.movieID))}
        </div>
        <div class='col-7'>
          <div class='movie-introduce'>
            <span class="title-movie"><center><b>${movie.nameMovie}</b></center></span>
            <br>
            ${InfoField('Genre', movie.genre)}
            <br>
            ${InfoField('Description', movie.description)}
            <br>
            ${InfoField('Release', moment(movie.release).format('L'))}
            <br>
            ${InfoField('Time', movie.duration)}
            </div>
          <div class='trailer text-center'>
            ${Trailer(movie.trailer)}
          </div>
        </div>
      </div>
    </div>
  `;

export default DetailPage;
