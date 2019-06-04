import * as _ from 'lodash';
import {
  checkEmpty,
  checkPhoneNumber,
  checkVaildEmail,
} from './validation';

import {
  displayToast,
} from '../../helpers';

import { END_POINTS } from '../../helpers/constants';

import services from '../../services';

const register = () => {
  document.querySelector('#registerButton').onclick = () => {
    let errorString = '';

    const name = document.querySelector('#username');
    const phoneNumber = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#conPassword');

    errorString += checkEmpty(name, phoneNumber, email, password, confirmPassword);
    errorString += checkPhoneNumber(phoneNumber.value);
    errorString += checkVaildEmail(email.value);

    if (!_.isEmpty(errorString)) {
      displayToast(errorString, { delay: 3000 });
    } else {
      services.send(END_POINTS.ACCOUNT.REGISTER, {
        type: 'json',
        body: {
          inputEmail: email.value,
          inputPassword: password.value,
          inputConfirmPassword: confirmPassword.value,
          name: name.value,
          phoneNumber: phoneNumber.value,
          permission: 1,
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          displayToast(err, { delay: 3000 });
        });
    }
  };
};

const login = () => {
  document.querySelector('#loginButton').onclick = () => {
    let errorString = '';

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    errorString += checkEmpty(email, password);
    errorString += checkVaildEmail(email.value);

    if (!_.isEmpty(errorString)) {
      displayToast(errorString, { delay: 3000 });
    } else {
      services.send(END_POINTS.ACCOUNT.LOGIN, {
        type: 'json',
        body: {
          inputEmail: email.value,
          inputPassword: password.value,
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          displayToast(err, { delay: 3000 });
        });
    }
  };
};

const forgot = () => {

};

export default {
  register,
  login,
  forgot,
};
