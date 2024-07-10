const findLastIndex = require("./findLastIndex");

function findLast(arr, fn) {
  return arr[findLastIndex(arr, fn)];
}

module.exports = findLast;
