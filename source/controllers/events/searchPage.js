export default () => {
  for (const movie of document.querySelectorAll('.btn-booking-list-movie')) {
    movie.onclick = (e) => {
      location.href = `/movie/${e.target.getAttribute('data-id')}/booking`;
    };
  }

  for (const movie of document.querySelectorAll('.btn-detail-list-movie')) {
    movie.onclick = (e) => {
      location.href = `/movie/${e.target.getAttribute('data-id')}/detail`;
    };
  }
};
