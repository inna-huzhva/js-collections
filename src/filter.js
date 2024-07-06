function filter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

module.exports = filter;
