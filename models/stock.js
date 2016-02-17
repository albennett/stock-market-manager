'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('buys',
  mongoose.Schema({
    name: String,
    symbol: String,
    quantity: String,
    price: String
  })
);
