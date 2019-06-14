/* eslint-disable no-undef */
const addQueries = (queries) => {
  let queryBody = '?';
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
  addQueries,
  displayToast,
};
