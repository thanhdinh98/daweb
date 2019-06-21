import * as _ from 'lodash';
import { ID } from '../../helpers/constants';
import {
  checkEmpty,
  checkPhoneNumber,
} from '../auth/validation';

import { displayToast } from '../../helpers';
import accountAPI from '../account';

export default () => {
  document.getElementById(ID.BUTTON.UPDATE_INFO).onclick = async (e) => {
    e.preventDefault();

    let errorString = '';

    const name = document.querySelector('#name');
    const phoneNumber = document.querySelector('#phone-number');
    const oldPassword = document.querySelector('#old-password');
    const newPassword = document.querySelector('#new-password');

    errorString += checkEmpty(name, phoneNumber, oldPassword, newPassword);
    errorString += checkPhoneNumber(phoneNumber.value);

    if (!_.isEmpty(errorString)) {
      displayToast(errorString, { delay: 3000 });
    } else {
      const response = await accountAPI.updateUser(
        name.value,
        phoneNumber.value,
        oldPassword.value,
        newPassword.value,
      );
      if (response.error) {
        displayToast(response.message, { delay: 3000 });
      } else {
        location.href = '/account/update';
      }
    }
  };
};
