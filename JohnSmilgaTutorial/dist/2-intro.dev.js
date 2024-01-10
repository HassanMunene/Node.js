"use strict";

var _require = require('fs'),
    readFile = _require.readFile;

console.log('Started first task');
readFile('./content/first.txt', 'utf8', function (err, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
  console.log('complete first task');
});
console.log('starting next task');