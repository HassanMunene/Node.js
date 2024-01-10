"use strict";

var _require = require("path"),
    resolve = _require.resolve;

console.log('starting promises');

function getData() {
  return new Promise(function (resolve, reject) {
    // simulate accessing data
    setTimeout(function () {
      var data = {
        name: 'Hassan'
      };
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function processData(data) {
  return new Promise(function (resolve, reject) {
    // simulate processing the data
    setTimeout(function () {
      var pData = "processed: ".concat(JSON.stringify(data));
      console.log(pData);
      resolve(pData);
    }, 1000);
  });
}

function saveData(pData) {
  return new Promise(function (resolve, reject) {
    // simulate saving the data
    setTimeout(function () {
      console.log("saved: ".concat(pData));
      resolve();
    }, 1000);
  });
}

getData().then(function (data) {
  return processData(data);
}).then(function (processedData) {
  return saveData(processedData);
})["catch"](function (errror) {
  console.error(errror);
});
console.log('finish promises');