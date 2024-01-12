"use strict";

var exp = require('constants');

var express = require('express');

var path = require('path');

var app = express();
app.use(express["static"]('./public')); // app.get('/', (request, response) => {
//     response.sendFile(path.resolve(__dirname, './index.html'));
// })

app.all('*', function (request, response) {
  response.status(404);
  response.send('<h1>Whatever you are looking for you will get it eventually</h1><br/>');
});
app.listen(5003, function () {
  console.log('Boy im listening on port 5003...');
});