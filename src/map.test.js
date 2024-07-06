const map = require("./map");

test("Handles empty array", () => {
  expect(map([], (x) => x + 1)).toEqual([]);
});

test("Can increment numbers", () => {
  expect(map([-1, 0, 5, 8, 100500], (x) => x + 1)).toEqual([0, 1, 6, 9, 100501]);
});

test("Can square numbers", () => {
  expect(map([-1, 0, 5, 8, 100], (x) => x * x)).toEqual([1, 0, 25, 64, 10000]);
});

test("Can add suffix to string", () => {
  expect(map(["a", "", "abba"], (x) => x + "b")).toEqual(["ab", "b", "abbab"]);
});

test("Does not change original array", () => {
  const arr = ["a", "", "abba"];
  expect(map(arr, (x) => x + "b")).toEqual(["ab", "b", "abbab"]);
  expect(arr).toEqual(["a", "", "abba"]);
});

test("Provides index as the second arg", () => {
  expect(map([1, 2, 3], (x, i) => x + i)).toEqual([1, 3, 5]);
});

test("Provides original array as the third arg", () => {
  expect(map([1, 2, 3], (x, i, arr) => x + arr[i])).toEqual([2, 4, 6]);
});
