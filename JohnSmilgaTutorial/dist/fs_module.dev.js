"use strict";

var _require = require('fs'),
    readFileSync = _require.readFileSync,
    writeFileSync = _require.writeFileSync;

var first = readFileSync('./content/first.txt', 'utf8');
var second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);