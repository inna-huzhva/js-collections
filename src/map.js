function map(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i, arr);
  }
  return res;
}

module.exports = map;
