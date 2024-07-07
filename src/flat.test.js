const flat = require("./flat");

test("Handles an empty array", () => {
  expect(flat([])).toEqual([]);
});

test("Can hamdle the simplest nested array", () => {
  expect(flat([[1, 2, 3, 4, 5]])).toEqual([1, 2, 3, 4, 5]);
});

test("Can hamdle simple nested array", () => {
  expect(flat([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
});

test("Can handle partially nested array", () => {
  expect(flat([1, 2, [3, 4], [], [5]])).toEqual([1, 2, 3, 4, 5]);
});

test("Can handle partially nested array with numbers and strings", () => {
  expect(flat([1, 3, ["a", "c"]])).toEqual([1, 3, "a", "c"]);
});

test("Can flatten deeply nested array", () => {
  expect(flat([1, 3, ["a", ["d", "e"]]], 2)).toEqual([1, 3, "a", "d", "e"]);
});

test("Can flatten deep array completely", () => {
  const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  expect(flat(arr, Infinity)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Does not change original array", () => {
  const arr = [1, 3, ["a", "c"]];
  expect(flat(arr)).toEqual([1, 3, "a", "c"]);
  expect(arr).toEqual([1, 3, ["a", "c"]]);
});
