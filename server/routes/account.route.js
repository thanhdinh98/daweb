const Router = require('express-promise-router');

const loginCtrl = require('../controllers/accounts/login.controller');
const registerCtrl = require('../controllers/accounts/register.controller');
const logoutCtrl = require('../controllers/accounts/logout.controller');

const router = Router();

router.post('/login', loginCtrl.postLogin);
router.post('/logout', logoutCtrl.userLogout);
router.post('/register', registerCtrl.postRegister);

module.exports = router;
