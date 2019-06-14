import BookingButton from '../Button/booking';

import { ID } from '../../helpers/constants';

const Image = (imageURL, movieID) => `
    <div class='text-center'>
      <img class="poster" src="${imageURL}">
      ${BookingButton(ID.BUTTON.BOOKING, movieID)}
    </div>
  `;

export default Image;
