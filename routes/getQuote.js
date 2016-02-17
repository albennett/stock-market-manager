"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/quoteCtrl');

router.get('/quotes', ctrl.index);

// POST request for Symbol
router.post('/quotes', ctrl.getSymbol);

module.exports = router;
