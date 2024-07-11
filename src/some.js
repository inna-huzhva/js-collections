const findIndex = require("./findIndex");

function some(arr, fn) {
  return findIndex(arr, fn) >= 0;
}

module.exports = some;
