import AuthPage from '../components/pages/AuthPage';
import UpdateUserPage from '../components/pages/UpdatePage';
import TicketHistory from '../components/pages/TicketPage';
import Header from '../components/header';
import Footer from '../components/footer';

import authControllers from '../controllers/auth/index';
import accountAPI from '../controllers/account';

import { headerEvents } from '../controllers/events';
import { handleEvents, displayToast } from '../helpers';

const App = (user, component) => `
  <div>
    <div class='top-bar'>${Header(user)}</div>
    <div>${component}</div>
    <div>${Footer()}</div>
  </div>
`;

export default async (basePath, path) => {
  const params = new URLSearchParams(location.search.slice(1));
  const user = await accountAPI.isLogin();

  switch (path) {
    case `${basePath}/login`: {
      if (!user.error) {
        location.href = '/';
      }
      document.querySelector('#main').innerHTML = AuthPage.Login();
      authControllers.login();
      break;
    }
    case `${basePath}/register`: {
      if (!user.error) {
        location.href = '/';
      }
      document.querySelector('#main').innerHTML = AuthPage.Register();
      authControllers.register();
      break;
    }
    case `${basePath}/logout`: {
      await accountAPI.logOut();
      location.href = '/';
      break;
    }
    case `${basePath}/update`: {
      if (user.error) {
        location.href = '/account/login';
      }
      document.querySelector('#main').innerHTML = App(user, UpdateUserPage());
      handleEvents(headerEvents);
      break;
    }
    case `${basePath}/forgot`: {
      if (!user.error) {
        location.href = '/';
      }
      document.querySelector('#main').innerHTML = AuthPage.Forgot();
      break;
    }
    case `${basePath}/verify`: {
      const email = params.get('email');
      const token = params.get('token');
      if (!email || !token) {
        location.href = '/';
      } else {
        const response = await accountAPI.verify(email, token);
        if (!response.error) {
          location.href = '/account/login';
        } else {
          displayToast(response.message, { delay: 3000 });
        }
      }
      break;
    }
    case `${basePath}/tickets`: {
      if (user.error) {
        location.href = '/account/login';
      }
      const history = [
        {
          time: '13/12/1998',
          tickets: [
            {
              cinema: 'asgs',
              nameMovie: 'asddg',
              time: 'asfdgh',
              room: 'dsafdgh',
              seat: 'sadgfh',
              price: 'asdfg',
            },
          ],
        },
      ];
      document.querySelector('#main').innerHTML = App(user, TicketHistory(history));
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
