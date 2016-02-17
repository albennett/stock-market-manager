'use strict';
//Route for getting a specific quote
const express = require('express');
const router = express.Router();
const request = require('request');
const ctrl = require('../controllers/detailsCtrl');
const Stock = require('../models/stock');

router.post('/buy/:symbol/:name/:price', ctrl.new);

module.exports = router;
