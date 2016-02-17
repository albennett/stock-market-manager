'use strict';
const Stock = require('../models/stock');
module.exports.index = (req, res) => {

  Stock.find().sort('-_id').exec((err, doc) => {
    if (err) throw err;
    console.log('doc', doc)
    res.render('portfolio', {
      symbol: doc[0].symbol,
      name: doc[0].name,
      price: doc[0].price,
      quantity: doc[0].quantity
    });
  });


};

