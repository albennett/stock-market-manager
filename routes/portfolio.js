'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/portfolioCtrl');

router.get(`/`, ctrl.index);

module.exports = router;
