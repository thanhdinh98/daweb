export default () => {
  for (const movie of document.querySelectorAll('.btn-movie-type')) {
    movie.onclick = (e) => {
      location.href = `/movie/now-showing?g=${e.target.getAttribute('data-id')}`;
    };
  }
};
