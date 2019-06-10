import image from './tickets.png';

const BookingButton = id => `
    <button class="btn btn-light booking" id=${id}>
      <img src="${image}" class="tickets">
      Booking
    </button>
  `;

export default BookingButton;
