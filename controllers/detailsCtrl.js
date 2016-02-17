'use strict'
const request = require('request');
const Stock = require('../models/stock');

module.exports.index = (req, res) => {
  const symbol = req.params.symbol;
  const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`;
  request.get(url, (err, response, body) => {
    if (err) throw (err);
    let result = JSON.parse(body);
    res.render('details', {
        result: result
    })
  });
}


module.exports.new = (req, res) => {
  const obj = new Stock({
    name: req.params.name,
    symbol: req.params.symbol,
    quantity: req.body.quantity,
    price: req.params.price
  });

  obj.save((err, newObj) => {
    if (err) throw err;

    res.send(`<h1>Thanks for purchasing stock for ${newObj.name}</h1>`);
  });
};
