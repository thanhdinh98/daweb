const Router = require('express-promise-router');

const router = Router();
const bodyParse = require('body-parser');

const urlEncoded = bodyParse.urlencoded({ extended: true });
const loginCtrl = require('../controllers/authentication.controller');

router.get('/', loginCtrl.getLogin);
router.post('/', urlEncoded, loginCtrl.postLogin);

module.exports = router;
