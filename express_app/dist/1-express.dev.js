"use strict";

var express = require('express');

var app = express();
app.get('/', function (request, response) {
  response.send('HOME PAGE BABY');
});
app.get('/about', function (request, response) {
  response.send('About page');
});
app.all('*', function (request, response) {
  response.status(404);
  response.send('<h1>Resource not found</h1>');
});
app.listen(5003, function () {
  console.log('server is listening on port 5003...');
});