const Router = require('express-promise-router');
const bodyParse = require('body-parser');

const loginCtrl = require('../controllers/accounts/login.controller');
const registerCtrl = require('../controllers/accounts/register.controller');
const logoutCtrl = require('../controllers/accounts/logout.controller');

const router = Router();
const urlEncoded = bodyParse.urlencoded({ extended: true });

router.post('/login', urlEncoded, loginCtrl.postLogin);
router.post('/logout', logoutCtrl.userLogout);
router.post('/register', urlEncoded, registerCtrl.postRegister);

module.exports = router;
