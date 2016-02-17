'use strict';
//Route for getting a specific quote
const express = require('express');
const router = express.Router();
const request = require('request');
const ctrl = require('../controllers/detailsCtrl');

router.get('/details/:symbol', ctrl.index);

module.exports = router;
