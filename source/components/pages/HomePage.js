import ListMovies from '../listMovie';
import image from '../test.jpg';

const HomePage = (data) => {
  const { hotMovie } = data;
  return `
    <div class='row'>
      <div class='col-3 search d-flex justify-content-center'>
        <div class='text-center mt-5'>
          <input type='text' class='form-control'/>
          <button class='btn btn-outline-primary'>Search</button>
        </div>
      </div>
      <div class='col-9'>
        <div class='hot-movie mb-3'>
          <img src='${image}' class='img-fluid image'/>
          <div class='content'>
            <h4>${hotMovie.title}</h4>
            <div>${hotMovie.name}</div>
            <div>${hotMovie.description}</div>
          </div>
        </div>
        ${ListMovies(data.movies)}
      </div>
    </div>
  `;
};

export default HomePage;
