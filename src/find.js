const findIndex = require("./findIndex");

function find(arr, fn) {
  return arr[findIndex(arr, fn)];
}

module.exports = find;
