"use strict";

var _require = require("fs"),
    readFile = _require.readFile;

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
}; // getText('./content/first.txt')
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });


var readLogText = function readLogText() {
  var result, second;
  return regeneratorRuntime.async(function readLogText$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getText('./content/first.txt'));

        case 3:
          result = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(getText('./content/second.txt'));

        case 6:
          second = _context.sent;
          console.log(second);
          console.log(result);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

readLogText();