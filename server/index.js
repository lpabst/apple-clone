const express = require('express');

const app = express();

app.use(express.static(__dirname + './../build'))

app.listen(8084, console.log("you are now connected"));
