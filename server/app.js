const db = require('./db/db');
require('dotenv').config();
var express = require('express');
var app = express();
var morgan = require('morgan');
var cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

var router = require('./routes.js');

app.use(express.static('./public'));
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at port http://${process.env.HOST}:${PORT}`);

module.exports.app = app;
