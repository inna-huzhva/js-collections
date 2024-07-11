function includes(arr, searchElement, fromIndex = 0) {
  if (fromIndex < 0) fromIndex = 0;
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === searchElement) return true;
  }
  return false;
}

module.exports = includes;
