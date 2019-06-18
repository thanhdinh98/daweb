const Router = require('express-promise-router');

const movieCtrl = require('../controllers/manages/movie-manage.controller');
const cinemaCtrl = require('../controllers/manages/cinema-manage.controller');

const router = Router();

router.post('/add-movie', movieCtrl.addMovie);
router.post('/delete-movie', movieCtrl.deleteMovie);
router.post('/add-cinema', cinemaCtrl.addCinema);
router.post('/delete-cinema', cinemaCtrl.deleteCinema);

module.exports = router;
