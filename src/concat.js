function concat(...arrays) {
  let res = [];
  for (let i = 0; i < arrays.length; i++) {
    res = [...res, ...arrays[i]];
  }
  return res;
}

module.exports = concat;
