"use strict";

var _require = require("fs"),
    readFile = _require.readFile;

var myPromise = new Promise(function (resolve, reject) {
  // readFile
  readFile('./content/first.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});
myPromise.then(function (result) {
  console.log(result);
})["catch"](function (err) {
  console.log(err);
});