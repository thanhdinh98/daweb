import HomePage from '../components/pages/HomePage';
import AuthPage from '../components/pages/AuthPage';

import movieControllers from '../controllers/movie';
import authControllers from '../controllers/auth/index';

import Header from '../components/header';
import Footer from '../components/footer';

// const { getListMovies } = movieControllers.beforeRender();


const App = data => `
    <div>
      <div class='top-bar'>${Header()}</div>
      <div>${HomePage(data)}</div>
      <div>${Footer()}</div>
    </div>
  `;

export default (basePath, path) => {
  switch (path) {
    case basePath: {
      const data = {
        movies: [
          {
            title: 'asfdgs',
            name: 'adgf',
            description: 'asfdgfs',
          },
          {
            title: 'asfdgs',
            name: 'adgf',
            description: 'asfdgfs',
          },
          {
            title: 'asfdgs',
            name: 'adgf',
            description: 'asfdgfs',
          },
          {
            title: 'asfdgs',
            name: 'adgf',
            description: 'asfdgfs',
          },
          {
            title: 'asfdgs',
            name: 'adgf',
            description: 'asfdgfs',
          },
        ],
        hotMovie: {
          title: 'asfdgs',
          name: 'adgf',
          description: 'asfdgfs',
        },
      };

      document.querySelector('#main').innerHTML = App(data);
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
