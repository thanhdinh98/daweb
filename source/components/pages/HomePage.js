import SliderMovies from '../MovieSlider/slider';
import image from './panel.jpg';

const HomePage = data => `
    <div class='row'>
      <div class='col-3 search d-flex justify-content-center sidebar'>
        <div class='text-center mt-5'>
          <button class='btn-home-page'>Now showing</button>
          <br> 
          <button class='btn-home-page' onclick="window.location='/contact'">Contact</button>
        </div>
      </div>
      <div class='col-9 movie-main-content'>
        <div class='hot-movie mb-3' style="padding:20px; padding-bottom:0">
          <img src='${image}' class='img-fluid image'/>
        </div>
        ${SliderMovies(data.movies)}
      </div>
    </div>
  `;

export default HomePage;
