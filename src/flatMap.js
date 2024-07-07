function flatMap(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const tmpArr = fn(arr[i], i, arr);
    for (let k = 0; k < tmpArr.length; k++) {
      res.push(tmpArr[k]);
    }
  }
  return res;
}

module.exports = flatMap;
