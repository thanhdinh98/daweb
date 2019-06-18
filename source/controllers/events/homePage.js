export default () => {
  for (const movie of document.querySelectorAll('.item')) {
    movie.onclick = () => {
      const id = movie.getAttribute('data-id');
      location.href = `/movie/${id}/detail`;
    };
  }
};
