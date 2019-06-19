import appRoutes from './app';
import movieRoutes from './movie';

export default () => {
  const { pathname } = location;
  const basePath = pathname.split('/')[1];

  switch (basePath) {
    case 'movie': {
      movieRoutes('/movie', pathname);
      break;
    }
    default:
      appRoutes('/', pathname);
  }
};
