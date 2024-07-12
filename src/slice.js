function slice(arr, start = 0, end) {
  if (start >= arr.length || end <= 0) return [];
  if (end < start) throw new Error("End should be after start");
  if (start < 0) {
    start = 0;
  }
  if (end > arr.length || end === undefined) {
    end = arr.length;
  }
  const res = [];
  for (let i = start; i < end; i++) {
    res.push(arr[i]);
  }
  return res;
}

module.exports = slice;
