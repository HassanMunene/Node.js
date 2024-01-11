"use strict";

var http = require('http');

var _require = require('fs'),
    readFileSync = _require.readFileSync,
    read = _require.read;

var homePage = readFileSync('./navbar-app/index.html');
var css = readFileSync('./navbar-app/style.css');
var js = readFileSync('./navbar-app/index.js');
var logo = readFileSync('./navbar-app/logo.svg');
var server = http.createServer(function (request, response) {
  var url = request.url;
  console.log(url);

  if (url === '/') {
    response.writeHead(200, {
      'content-type': 'text/html'
    });
    response.write(homePage);
    response.end();
  } else if (url === '/style.css') {
    response.writeHead(200, {
      'content-type': 'text/css'
    });
    response.write(css);
    response.end();
  } else if (url === '/index.js') {
    response.writeHead(200, {
      'content-type': 'text/javascript'
    });
    response.write(js);
    response.end();
  } else if (url === '/logo.svg') {
    response.writeHead(200, {
      'content-type': 'image/svg+xml'
    });
    response.write(logo);
    response.end();
  } else {
    response.writeHead(200, {
      'content-type': 'text/plain'
    });
    response.write('Page not found');
    response.end();
  }
});
server.listen(5003, function () {
  return console.log('listening...');
});