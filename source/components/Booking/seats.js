/* eslint-disable no-unused-vars */
const Seat = (style, id) => `
    <button class=${style}>${id + 1}</button>
  `;

const Seats = (rows, cols, selectedSeats) => {
  let count = 0;
  let seats = '';
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (selectedSeats[count] === 0) {
        seats += Seat('btn-not-book', count);
      } else {
        seats += Seat('btn-booked', count);
      }
      count += 1;
    }
    seats += '<br/>';
  }

  return `
    <div>
      ${seats}
    </div>
  `;
};

export default Seats;
