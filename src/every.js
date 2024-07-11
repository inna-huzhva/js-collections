function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) return false;
  }
  return true;
}

module.exports = every;
