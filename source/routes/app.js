import HomePage from '../components/pages/HomePage';
import TopBar from '../components/topBar';
import AuthForm from '../components/authForm';

import movieControllers from '../controllers/movie';

// const { getListMovies } = movieControllers.beforeRender();

const App = data => `
    <div>
      <div class='container top-bar'>${TopBar()}</div>
      <div class='container'>${HomePage(data)}</div>
      <div class='footer'>
        <div class = "row">
          <div class = "col-6 info">
            <center>
                <span>&copy CodeGym</span>
                <br>
                <div>
                  <a class="href" href="#"><i class="fa fa-facebook-square"></i></i></a>
                  <a class="href" href="#"><i class="fa fa-github"></i></i></a>
                  <a class="href" href="#"><i class="fa fa-stack-overflow"></i></i></a>
                </div>  
            </center>        
          </div>
          <div class = "col-6" class="map">
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5470033896227!2d106.66129501472606!3d10.769352892326344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f49357d9e5b%3A0xf16ffaa20e46e87f!2zVsSDbiBwaMOybmcgQ0ogQ0dWIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1559362302134!5m2!1svi!2s" width="500" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
            
          </div>
        </div>
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
