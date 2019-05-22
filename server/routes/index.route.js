const express = require('express');

const router = express.Router();
const UserCtrl = require('../controllers/index.controller.js');

router.get('/', UserCtrl.getIndexPage);

module.exports = router;
