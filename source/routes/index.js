import * as _ from 'lodash';

import appRoutes from './app';
import movieRoutes from './movie';
import accountRoutes from './account';
import managerRoutes from './manager';

import accountAPI from '../controllers/account';

export default async () => {
  const { pathname } = location;
  const basePath = pathname.split('/')[1];

  const user = await accountAPI.isLogin();

  if (!_.isEmpty(user) && !_.isEmpty(user.user) && _.isEqual(user.user.permission, 2)) {
    switch (basePath) {
      default:
        managerRoutes('/', pathname);
    }
    return;
  }

  switch (basePath) {
    case 'movie': {
      movieRoutes('/movie', pathname);
      break;
    }
    case 'account': {
      accountRoutes('/account', pathname);
      break;
    }
    default:
      appRoutes('/', pathname);
  }
};
