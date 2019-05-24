const Router = require('express-promise-router');

const router = Router();
const logoutCtrl = require('../controllers/logout.controller');

router.get('/', logoutCtrl.userLogout);

module.exports = router;
