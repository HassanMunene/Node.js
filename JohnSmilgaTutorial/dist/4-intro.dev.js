"use strict";

var _require = require('assert'),
    rejects = _require.rejects;

var _require2 = require('fs'),
    readFile = _require2.readFile;

var _require3 = require('path'),
    resolve = _require3.resolve;

readFile('./content/first.txt', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});

var getText = function getText(path) {
  return new Promise(function (resolve, reject) {
    readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText('./content/second.txt').then(function (result) {
  console.log(result);
})["catch"](function (err) {
  console.log(err);
});