function reduceRight(arr, fn, acc) {
  let i = arr.length - 1;
  if (acc === undefined) {
    acc = arr[arr.length - 1];
    i = arr.length - 2;
  }
  for (; i >= 0; i--) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}

module.exports = reduceRight;
