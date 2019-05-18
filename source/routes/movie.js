export default (basePath, path) => {
  switch (path) {
    case basePath: {
      document.querySelector('#main').innerHTML = 'Main';
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
