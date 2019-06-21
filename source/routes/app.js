import HomePage from '../components/pages/HomePage';

import Header from '../components/header';
import Footer from '../components/footer';

import movieAPI from '../controllers/movie';
import accountAPI from '../controllers/account';
import { homePageEvents, headerEvents } from '../controllers/events';

import { handleEvents } from '../helpers';

import ContactPage from '../components/pages/ContactPage';

const App = (user, component) => `
  <div>
    <div class='top-bar'>${Header(user)}</div>
    <div>${component}</div>
    <div>${Footer()}</div>
  </div>
`;

export default async (basePath, path) => {
  const user = await accountAPI.isLogin();

  switch (path) {
    case basePath: {
      const response = await movieAPI.getAllMovies();
      document.querySelector('#main').innerHTML = App(user, HomePage({
        movies: response.movies,
      }));
      handleEvents(homePageEvents, headerEvents);
      break;
    }
    case '/contact': {
      document.querySelector('#main').innerHTML = App(user, ContactPage());
      handleEvents(headerEvents);
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
