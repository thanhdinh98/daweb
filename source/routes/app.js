import HomePage from '../components/pages/HomePage';
import TopBar from '../components/topBar';

import movieControllers from '../controllers/movie';

// const { getListMovies } = movieControllers.beforeRender();

const App = data => `
    <div>
      <div class='container top-bar'>${TopBar()}</div>
      <div class='container'>${HomePage(data)}</div>
      <div class='container footer d-flex justify-content-center align-items-center mt-5'>        
        <span>CodeGym</span>
      </div>
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
      movieControllers.afterRender();
      break;
    }
    case '/login': {
      document.querySelector('#main').innerHTML = 'Login';
      break;
    }
    case '/register': {
      document.querySelector('#main').innerHTML = 'Register';
      break;
    }
    case '/logout': {
      document.querySelector('#main').innerHTML = 'Logout';
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
