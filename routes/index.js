'use strict';
const express = require('express');
const router = express.Router();

const getQuote = require("./getQuote")
const details = require("./details")
const portfolio = require('./portfolio')
const buy = require('./buy')

router.use(getQuote);
router.use(details);
router.use(portfolio);
router.use(buy);

module.exports = router;
