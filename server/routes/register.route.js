const Router = require('express-promise-router');

const router = Router();
const bodyParser = require('body-parser');

const urlEncoded = bodyParser.urlencoded({ extended: true });
const registerCtrl = require('../controllers/register.controller');

router.get('/', registerCtrl.getRegister);
router.post('/', urlEncoded, registerCtrl.postRegister);

module.exports = router;
