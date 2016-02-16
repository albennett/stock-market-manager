"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/QuoteCtrl');

// router.get('/quotes', (req, res) =>
// {
//   res.render("quotes")
// })

router.get('/quotes', ctrl.index);

module.exports = router;
