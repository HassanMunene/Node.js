"use strict";

var http = require('http');

var server = http.createServer(function (req, res) {
  res.write('Hello welcome to my first http server in Node');
  res.end();
});
server.listen(5003, function () {
  return console.log('listening...');
});