"use strict";

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.end('You are in the Home page');
  } else if (req.url === '/about') {
    res.end('You are in the about page');
  } else {
    res.end("\n        <h1>Ooops</h1>\n        <p>This page Ain't available</p>\n        <a href=\"/\">Go back to home page</a>\n        ");
  }
});
server.listen(5003, function () {
  return console.log('Listening');
});