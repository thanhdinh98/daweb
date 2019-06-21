import AuthPage from '../components/pages/AuthPage';
import UpdateUserPage from '../components/pages/UpdatePage';
import TicketHistory from '../components/pages/TicketPage';
import ResetpassPage from '../components/pages/ResetpassPage';

import Header from '../components/header';
import Footer from '../components/footer';

import authControllers from '../controllers/auth/index';
import accountAPI from '../controllers/account';

import { headerEvents, updatePageEvents, resetpassEvents } from '../controllers/events';
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
      const userInfo = await accountAPI.getUserInfo();
      document.querySelector('#main').innerHTML = App(user, UpdateUserPage(userInfo.user));
      handleEvents(headerEvents, updatePageEvents);
      break;
    }
    case `${basePath}/forgot`: {
      if (!user.error) {
        location.href = '/';
      }
      document.querySelector('#main').innerHTML = AuthPage.Forgot();
      authControllers.forgot();
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
      const history = await accountAPI.getTicketHistory();
      document.querySelector('#main').innerHTML = App(user, TicketHistory(history));
      break;
    }
    case `${basePath}/reset`: {
      const email = params.get('email');
      const token = params.get('token');
      if (!email || !token) {
        location.href = '/';
      } else {
        document.querySelector('#main').innerHTML = ResetpassPage();
        handleEvents(resetpassEvents);
      }
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
