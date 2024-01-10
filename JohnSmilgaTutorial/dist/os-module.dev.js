"use strict";

var os = require('os');

var path = require('path'); //useful info about the current user


var user = os.userInfo();
console.log(user);
console.log("The system uptime is: ".concat(os.uptime(), " seconds"));
var currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
};
console.log(currentOS);