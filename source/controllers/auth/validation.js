import * as _ from 'lodash';

const checkEmpty = (...nodes) => {
  for (const node of nodes) {
    if (_.isEmpty(node.value)) {
      return '<div class="text-danger">Please make sure no field is empty</div>';
    }
  }
  return '';
};

const checkPhoneNumber = (phoneNumber) => {
  let errorString = '';
  if (phoneNumber.length > 11 || phoneNumber.length < 10) {
    errorString = '<div class="text-danger">Phone number should be 10 or 11 numbers</div>';
  }
  if (isNaN(phoneNumber)) {
    errorString = '<div class="text-danger">Phone number should not includes characters</div>';
  }
  return errorString;
};

const checkVaildEmail = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email) ? '' : '<div class="text-danger">Email is invaild</div>';
};

export {
  checkEmpty,
  checkPhoneNumber,
  checkVaildEmail,
};
