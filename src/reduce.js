function reduce(arr, fn, acc) {
  let i = 0;
  if (acc === undefined) {
    acc = arr[0];
    i = 1;
  }
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}

module.exports = reduce;
