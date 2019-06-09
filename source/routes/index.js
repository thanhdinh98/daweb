import appRoutes from './app';
import detailRoutes from './movie';

export default () => {
  const { pathname } = location;
  const basePath = pathname.split('/')[1];

  switch (basePath) {
    case 'movie': {
      detailRoutes('/movie', pathname);
      break;
    }
    default:
      appRoutes('/', pathname);
  }
};
