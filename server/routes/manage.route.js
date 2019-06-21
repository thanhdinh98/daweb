const Router = require('express-promise-router');

const movieCtrl = require('../controllers/manages/movie-manage.controller');
const cinemaCtrl = require('../controllers/manages/cinema-manage.controller');
const revenueCtrl = require('../controllers/manages/revenue.controller');

const router = Router();

router.post('/add-movie', movieCtrl.addMovie);
router.post('/delete-movie', movieCtrl.deleteMovie);
router.post('/add-cinema', cinemaCtrl.addCinema);
router.post('/delete-cinema', cinemaCtrl.deleteCinema);

router.get('/statistic-cinema', revenueCtrl.statisticByCinema);
router.get('/statistic-movie', revenueCtrl.statisticByMovie);

module.exports = router;
