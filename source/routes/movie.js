import DetailPage from '../components/pages/DetailPage';
import BookingPage from '../components/pages/BookingPage';

import Header from '../components/header';
import Footer from '../components/footer';

import movieAPI from '../controllers/movie';
import { detailPageEvents } from '../controllers/events';

const App = component => `
    <div>
      <div class='top-bar'>${Header()}</div>
      <div>${component}</div>
      <div>${Footer()}</div>
    </div>
  `;

export default async (basePath, path) => {
  const [, , id] = path.split('/');

  switch (path) {
    case `${basePath}/${id}/detail`: {
      const response = await movieAPI.getMovieByID(id);
      if (response.error) {
        location.href = '/';
      }
      document.querySelector('#main').innerHTML = App(DetailPage(response.movie));
      detailPageEvents();
      break;
    }
    case `${basePath}/${id}/booking`: {
      const response = await movieAPI.getMovieByID(id);
      if (response.error) {
        location.href = '/';
      }
      document.querySelector('#main').innerHTML = App(BookingPage({
        movie: response.movie,
      }));
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
