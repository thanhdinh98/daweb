import authRoutes from './auth';
import movieRoutes from './movie';

export default () => {
  const { pathname } = location;
  const basePath = pathname.split('/')[1];

  switch (basePath) {
    case 'auth': {
      authRoutes('/auth', pathname);
      break;
    }
    default:
      movieRoutes('/', pathname);
  }
};
