export default (basePath, path) => {
  switch (path) {
    case `${basePath}/login`: {
      document.querySelector('#main').innerHTML = 'Login';
      break;
    }
    case `${basePath}/register`: {
      document.querySelector('#main').innerHTML = 'Register';
      break;
    }
    case `${basePath}/logout`: {
      document.querySelector('#main').innerHTML = 'Logout';
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
