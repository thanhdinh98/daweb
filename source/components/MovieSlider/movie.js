import image from './test.jpeg';

const Movie = movie => `
    <div class='item'>
      <img src='${image}' class='img-fluid image' />
      <div class='content'>
        <h4>${movie.title}</h4>
        <div>${movie.name}</div>
        <div>${movie.description}</div>
      </div>
    </div>
  `;

export default Movie;
