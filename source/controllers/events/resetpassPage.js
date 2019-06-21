import * as _ from 'lodash';

import { displayToast } from '../../helpers';
import accountAPI from '../account';
import { checkEmpty } from '../auth/validation';

export default () => {
  document.querySelector('#submit').onclick = async () => {
    const params = new URLSearchParams(location.search.slice(1));

    let errorString = '';
    const password = document.querySelector('#password');

    errorString += checkEmpty(password);

    if (!_.isEmpty(errorString)) {
      const email = params.get('email');
      const token = params.get('token');
      if (!email || !token) {
        location.href = '/';
      } else {
        const response = await accountAPI.resetPass(email, token);
        if (!response.error) {
          location.href = '/account/login';
        } else {
          displayToast(response.message, { delay: 3000 });
        }
      }
    } else {
      displayToast(errorString, { delay: 3000 });
    }
  };
};
