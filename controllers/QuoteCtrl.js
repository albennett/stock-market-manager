'use strict';
const request = require('request');

module.exports.index = (req, res) => {
  res.render('quotes');
};

module.exports.getSymbol = (req, res) => {
  let symbol = req.body.symbol;
  const url = `http://dev.markitondemand.com/Api/v2/Lookup/json?input=${symbol}`;
  request.get(url, (err, response, body) => {

    if (err) throw err;
    let result = JSON.parse(body);
    res.render('quotes', {
        title: 'Stock Results',
        results: result
    });
  });
};
