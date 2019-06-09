import HomePage from '../components/pages/HomePage';
import AuthPage from '../components/pages/AuthPage';

import movieControllers from '../controllers/movie';
import authControllers from '../controllers/auth/index';

// const { getListMovies } = movieControllers.beforeRender();


export default (basePath, path) => {
  switch (path) {
    case basePath: {
      const data = {};

      document.querySelector('#main').innerHTML = HomePage(data);
      movieControllers.afterRender();

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
