import appRoutes from './app';

export default () => {
  const { pathname } = location;
  const basePath = pathname.split('/')[1];

  switch (basePath) {
    default:
      appRoutes('/', pathname);
  }
};
