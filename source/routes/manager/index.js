import ManagerPage from '../../components/Admin/pages/ManagerPage';

import MovieRevenue from '../../components/Admin/Revenue/Movie';
import CinemaRevenue from '../../components/Admin/Revenue/Cinema';
import CinemaManagement from '../../components/Admin/Management/CinemaManagement';
import ShowTimeManagement from '../../components/Admin/Management/ShowTimeManagement';
import RoomManagement from '../../components/Admin/Management/RoomManagement';
import MovieManagement from '../../components/Admin/Management/MovieMananement';

import Header from '../../components/header';
import Footer from '../../components/footer';

import accountAPI from '../../controllers/account';

import { managerEvents, headerEvents } from '../../controllers/events';
import { handleEvents } from '../../helpers';

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
      location.href = '/cinema-revenue';
      break;
    }
    case '/cinema-revenue': {
      document.querySelector('#main').innerHTML = App(user, ManagerPage(CinemaRevenue));
      handleEvents(managerEvents, headerEvents);
      break;
    }
    case '/movie-revenue': {
      document.querySelector('#main').innerHTML = App(user, ManagerPage(MovieRevenue));
      handleEvents(managerEvents, headerEvents);
      break;
    }
    case '/cinema-management': {
      document.querySelector('#main').innerHTML = App(user, ManagerPage(CinemaManagement));
      handleEvents(managerEvents.cinemaManagent, headerEvents);
      break;
    }
    case '/room-management': {
      document.querySelector('#main').innerHTML = App(user, ManagerPage(RoomManagement));
      handleEvents(managerEvents, headerEvents);
      break;
    }
    case '/showtime-management': {
      document.querySelector('#main').innerHTML = App(user, ManagerPage(ShowTimeManagement));
      handleEvents(managerEvents, headerEvents);
      break;
    }
    case '/movie-management': {
      document.querySelector('#main').innerHTML = App(user, ManagerPage(MovieManagement));
      handleEvents(managerEvents, headerEvents);
      break;
    }
    case '/account/logout': {
      await accountAPI.logOut();
      location.href = '/';
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
