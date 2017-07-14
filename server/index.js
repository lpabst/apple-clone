const express = require('express');
const bodyParser = require('body-parser');
var config = require('./config.js');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../build'))

app.listen(config.port,console.log("you are now connected on" + config.port));
