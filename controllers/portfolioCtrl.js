'use strict';

module.exports.index = (req, res) => {
  console.log("req", req);
  console.log("res", res);
  res.render('portfolio', {
    sym: 'AAPL',
    comp: 'Apple',
    price: '$689.67',
    qty: '5'
  });
}
