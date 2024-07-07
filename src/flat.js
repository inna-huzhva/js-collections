const flatMap = require("./flatMap");
const filter = require("./filter");

function flat(arr, depth = 1) {
  let res = arr;
  for (let i = 1; i <= depth; i++) {
    res = flatMap(res, (x) => (Array.isArray(x) ? x : [x]));
    if (filter(res, (x) => Array.isArray(x)).length === 0) {
      break;
    }
  }
  return res;
}

module.exports = flat;
