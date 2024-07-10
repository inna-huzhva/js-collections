function findIndex(arr, fn) {
  let res = -1;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      res = i;
      break;
    }
  }
  return res;
}

module.exports = findIndex;
