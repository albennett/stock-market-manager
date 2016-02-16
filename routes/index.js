'use strict';
const express = require('express');
const router = express.Router();

const getQuote = require("./getQuote")
const quoteDetails = require("./quoteDetails")

router.use(getQuote);
router.use(quoteDetails);

module.exports = router;
