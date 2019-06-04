/* eslint-disable no-undef */
const addQueries = (queries) => {
  let queryBody = '?';
  // eslint-disable-next-line no-restricted-syntax
  for (const [query, value] of Object.entries(queries)) {
    queryBody += `${query}=${value}&`;
  }
  return queryBody;
};

const displayToast = (msg, options) => {
  document.querySelector('.toast-body').innerHTML = msg;
  $('.toast').toast(options).toast('show');
};

export {
  // eslint-disable-next-line import/prefer-default-export
  addQueries,
  displayToast,
};
