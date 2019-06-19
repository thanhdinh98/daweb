import services from '../services';
import { END_POINTS } from '../helpers/constants';

export default {
  isLogin: () => services.send(END_POINTS.ACCOUNT.IS_LOGIN),
};
