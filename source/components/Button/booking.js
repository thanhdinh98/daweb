import image from './tickets.png';

const BookingButton = (id, movieID) => `
    <button class="btn btn-light booking" id=${id} data-id='${movieID}'>
      <img src="${image}" class="tickets">
      Booking
    </button>
  `;

export default BookingButton;
