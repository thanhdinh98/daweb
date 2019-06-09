import BookingButton from '../Button/bookingButton';

const Image = imageURL => `
    <div class='text-center'>
      <img class="poster" src="${imageURL}">
      ${BookingButton('bookingMovie')}
    </div>
  `;

export default Image;
