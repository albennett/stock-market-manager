'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Mongoose Connect
mongoose.connect('mongodb://localhost/stock-market');
const db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
console.log('Started on port 3000...');
