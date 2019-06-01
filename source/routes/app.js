import HomePage from '../components/pages/HomePage';
import TopBar from '../components/topBar';
import AuthForm from '../components/authForm';
import Footer from '../components/footer';

import movieControllers from '../controllers/movie';

// const { getListMovies } = movieControllers.beforeRender();

const App = data => `
    <div>
      <div class='top-bar'>${TopBar()}</div>
      <div>${HomePage(data)}</div>
    </div>
  `;

export default (basePath, path) => {
  switch (path) {
    case basePath: {
      const data = {
        movies: [
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
          {
            title: 'Thanh',
            name: 'Dep trai',
            description: 'Sieu dep trai',
          },
        ],
        hotMovie: {
          title: 'Thanh',
          name: 'Dep trai',
          description: 'Sieu dep trai',
        },
      };

      document.querySelector('#main').innerHTML = App(data);
      document.querySelector('#footer').innerHTML = Footer();
      movieControllers.afterRender();

      break;
    }
    case '/login': {
      document.querySelector('#main').innerHTML = AuthForm().login;
      break;
    }
    case '/register': {
      document.querySelector('#main').innerHTML = AuthForm().register;
      break;
    }
    case '/forgot': {
      document.querySelector('#main').innerHTML = AuthForm().forgot;
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
