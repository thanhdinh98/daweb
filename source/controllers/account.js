import services from '../services';
import { END_POINTS } from '../helpers/constants';

export default {
  isLogin: () => services.send(END_POINTS.ACCOUNT.IS_LOGIN),
  logOut: () => services.send(END_POINTS.ACCOUNT.LOGOUT, {
    type: 'json',
    body: {},
  }),
  verify: (email, token) => services.send(END_POINTS.ACCOUNT.VERIFY, {
    type: 'params',
    body: {
      email,
      token,
    },
  }),
};
