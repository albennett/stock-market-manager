'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const routes = require('./routes/');

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'stock-market-manager';

const MONGODB_AUTH = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : '';

const MONGODB_URL = `mongodb://${MONGODB_AUTH}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

// Mongoose Connect
mongoose.connect(MONGODB_URL);
const db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());
app.use(routes);

app.set('view engine', 'jade');
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(PORT);
console.log('Started on port 3000...');
