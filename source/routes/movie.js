import DetailPage from '../components/pages/DetailPage';
import BookingPage from '../components/pages/BookingPage';

import bookingController from '../controllers/movie/booking';

export default (basePath, path) => {
  const [, , id] = path.split('/');

  switch (path) {
    case `${basePath}/${id}/detail`: {
      const movie = {
        imageUrl: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
        title: 'Adventure end game',
        genre: 'Science fiction.',
        release: '20/3/2019',
        duration: '180 minutes',
        iframeUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c',
      };
      document.querySelector('#main').innerHTML = DetailPage(movie);
      break;
    }
    case `${basePath}/${id}/booking`: {
      document.querySelector('#main').innerHTML = BookingPage({
      });
      bookingController.afterRender();
      break;
    }
    default:
      document.querySelector('#main').innerHTML = '404 Error';
  }
};
