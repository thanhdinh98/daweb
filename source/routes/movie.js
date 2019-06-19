import DetailPage from '../components/pages/DetailPage';
import BookingPage from '../components/pages/BookingPage';
import SearchPage from '../components/pages/SreachPage';
import NowShowingPage from '../components/pages/ShowingNowPage';

import Header from '../components/header';
import Footer from '../components/footer';

import movieAPI from '../controllers/movie';
import cinemaAPI from '../controllers/cinema';
// /import accountAPI from '../controllers/account';
import {
  detailPageEvents,
  bookingPageEvents,
  headerEvents,
  searchPageEvents,
  showingNowPageEvents,
} from '../controllers/events';

import { handleEvents } from '../helpers';

const App = (user, component) => `
  <div>
    <div class='top-bar'>${Header(user)}</div>
    <div>${component}</div>
    <div>${Footer()}</div>
  </div>
`;

export default async (basePath, path) => {
  const [, , id] = path.split('/');
  const params = new URLSearchParams(location.search.slice(1));
  const user = {
    name: 'Thanh',
  };

  switch (path) {
    case `${basePath}/${id}/detail`: {
      const response = await movieAPI.getMovieByID(id);
      document.querySelector('#main').innerHTML = App(user, DetailPage(response.movie));
      handleEvents(detailPageEvents, headerEvents);
      break;
    }
    case `${basePath}/${id}/booking`: {
      Promise.all([
        movieAPI.getMovieByID(id),
        cinemaAPI.getCinemaBaseOnMovie(id),
      ]).then((values) => {
        document.querySelector('#main').innerHTML = App(user, BookingPage({
          movie: values[0].movie,
          cinema: values[1].result,
        }));
        handleEvents(bookingPageEvents, headerEvents);
      });
      break;
    }
    case `${basePath}/search`: {
      const search = params.get('q');
      const movies = await movieAPI.getMovieByName(search);
      document.querySelector('#main').innerHTML = App(user, SearchPage(movies.movie));
      handleEvents(headerEvents, searchPageEvents);
      break;
    }
    case `${basePath}/now-showing`: {
      const genre = params.get('g');
      const movies = await movieAPI.getMovieByGenre(genre);
      document.querySelector('#main').innerHTML = App(user, NowShowingPage(movies.movie));
      handleEvents(headerEvents, showingNowPageEvents);
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
