'use strict';
//Route for getting a specific quote
const express = require('express');
const router = express.Router();
const request = require('request');
// const getQuoteCtrl = require("../controllers/getQuoteCtrl");
// router.get("/quotes/:symbol", getQuoteCtrl.getQuoteByForm)



router.get('/quote/details', (req, res) => {
  let URL = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=NFLX";

  request.get(URL, (err, response, body) => {
    if (err) throw err;

    res.header('Access-Control-Allow-Origin', '*');
    res.send(JSON.parse(body));
  });
});

module.exports = router;
