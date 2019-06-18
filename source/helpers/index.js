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

const ajaxRender = ({ id, component, eventHandler }) => {
  document.getElementById(id).innerHTML = component;
  eventHandler();
};

const clearContent = (...ids) => {
  for (const id of ids) {
    document.getElementById(id).innerHTML = '';
  }
};

export {
  addQueries,
  displayToast,
  ajaxRender,
  clearContent,
};
