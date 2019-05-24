const Router = require('express-promise-router');

const router = Router();
const indexCtrl = require('../controllers/index.controller');

router.get('/', indexCtrl.getIndexPage);

module.exports = router;
