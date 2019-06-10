const Router = require('express-promise-router');

const loginCtrl = require('../controllers/accounts/login.controller');
const logoutCtrl = require('../controllers/accounts/logout.controller');
const registerCtrl = require('../controllers/accounts/register.controller');
const resetPasswordCtrl = require('../controllers/accounts/resetpassword.controller');
const updateAccountCtrl = require('../controllers/accounts/updateaccount.controller');
const verifyCtrl = require('../controllers/accounts/verify.controller');

const router = Router();

router.post('/login', loginCtrl.login);
router.post('/logout', logoutCtrl.logout);
router.post('/register', registerCtrl.register);
router.get('/resetpass', resetPasswordCtrl.sendLinkResetPassword);
router.post('/resetpass', resetPasswordCtrl.resetPassword);
router.post('/update', updateAccountCtrl.updateInfoUser);
router.get('/verify', verifyCtrl.verifyEmail);
router.post('/update', updateAccountCtrl.updateInfoUser);

module.exports = router;
