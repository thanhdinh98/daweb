import HomePage from '../components/pages/HomePage';
import AuthPage from '../components/pages/AuthPage';

import authControllers from '../controllers/auth/index';

import Header from '../components/header';
import Footer from '../components/footer';

import movieAPI from '../controllers/movie';
import { homePageEvents } from '../controllers/events';

const App = data => `
    <div>
      <div class='top-bar'>${Header()}</div>
      <div>${HomePage(data)}</div>
      <div>${Footer()}</div>
    </div>
  `;

export default async (basePath, path) => {
  switch (path) {
    case basePath: {
      const response = await movieAPI.getAllMovies();
      document.querySelector('#main').innerHTML = App({
        movies: response.movies,
      });
      homePageEvents();
      break;
    }
    case '/login': {
      document.querySelector('#main').innerHTML = AuthPage.Login();
      authControllers.login();
      break;
    }
    case '/register': {
      document.querySelector('#main').innerHTML = AuthPage.Register();
      authControllers.register();
      break;
    }
    case '/forgot': {
      document.querySelector('#main').innerHTML = AuthPage.Forgot();
      break;
    }
    case '/logout': {
      if (true) {
        location.href = '/';
      }
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
