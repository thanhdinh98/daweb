/* eslint-disable no-unused-vars */
const Seat = (style, val, dis, id) => `
    <button class=${style} id="${val}" ${dis}>${id}</button>
  `;

const Seats = (rows, cols, selectedSeats) => {
  let count = 0;
  let seats = '';
  const temp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 1; col <= cols; col += 1) {
      if (selectedSeats[count] === 0) {
        seats += Seat('btn-not-book', `${row} ${col}`, 'enabled', temp[row % 24] + col);
      } else {
        seats += Seat('btn-booked', `${row} ${col}`, 'disabled', temp[row % 24] + col);
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
