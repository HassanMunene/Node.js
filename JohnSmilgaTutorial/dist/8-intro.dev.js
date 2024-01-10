"use strict";

var _require = require('fs'),
    readFile = _require.readFile,
    writeFile = _require.writeFile;

var util = require('util');

var readFilePromise = util.promisify(readFile);
var writeFilePromise = util.promisify(writeFile);

var readLogText = function readLogText() {
  var first, second;
  return regeneratorRuntime.async(function readLogText$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(readFilePromise('./content/first.txt', 'utf8'));

        case 3:
          first = _context.sent;
          console.log(first);
          _context.next = 7;
          return regeneratorRuntime.awrap(readFilePromise('./content/second.txt', 'utf8'));

        case 7:
          second = _context.sent;
          console.log(second);
          _context.next = 11;
          return regeneratorRuntime.awrap(writeFilePromise('./content/using-utils.txt', 'THIS IS REALLY AWESOME'));

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

readLogText();