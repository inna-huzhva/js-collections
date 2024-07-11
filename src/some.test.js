const some = require("./some");

test("Can handle empty array", () => {
  expect(some([], (x) => x > 0)).toBe(false);
});

test("Can test if at least one element in the array pass the test condition", () => {
  const arr = [10, 20, 30, -30, -20, 10];
  expect(some(arr, (x) => x > -50)).toBe(true);
  expect(some(arr, (x) => x > 50)).toBe(false);
});

test("Works on sparse arrays", () => {
  const arr = [2, , 2];
  expect(some(arr, (x) => x === undefined)).toBe(true);
  expect(some(arr, (x) => x === 2)).toBe(true);
});

test("Can work with strings", () => {
  const words = ["sea", "flat", "park", "lake"];
  expect(some(words, (x) => x.length <= 4)).toBe(true);
});

test("Does not change original array", () => {
  const arr = [2, 3, 4];
  expect(some(arr, (x) => x > 1)).toBe(true);
  expect(arr).toEqual([2, 3, 4]);
});

test("Provides index and original array as the second and third args", () => {
  const arr = [-100, 20, 10, 300, -10];
  expect(some(arr, (x, i, arr) => arr[i] % 2 === x % 10)).toBe(true);
});
