import appRoutes from './app';
import movieRoutes from './movie';
import accountRoutes from './account';

export default () => {
  const { pathname } = location;
  const basePath = pathname.split('/')[1];

  switch (basePath) {
    case 'movie': {
      movieRoutes('/movie', pathname);
      break;
    }
    case 'account': {
      accountRoutes('/account', pathname);
      break;
    }
    case 'booking': {
      break;
    }
    default:
      appRoutes('/', pathname);
  }
};
