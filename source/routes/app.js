import HomePage from '../components/pages/HomePage';
import AuthPage from '../components/pages/AuthPage';
import UpdateUserPage from '../components/pages/UpdatePage';

import authControllers from '../controllers/auth/index';

import Header from '../components/header';
import Footer from '../components/footer';

import movieAPI from '../controllers/movie';
// import accountAPI from '../controllers/account';
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
  const user = {
    name: 'Thanh',
  };

  switch (path) {
    case basePath: {
      const response = await movieAPI.getAllMovies();
      document.querySelector('#main').innerHTML = App(user, HomePage({
        movies: response.movies,
      }));
      handleEvents(homePageEvents, headerEvents);
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
    case '/update-user': {
      document.querySelector('#main').innerHTML = App(user, UpdateUserPage());
      headerEvents();
      break;
    }
    case '/contact': {
      document.querySelector('#main').innerHTML = App(user, ContactPage());
      headerEvents();
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
