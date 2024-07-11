const every = require("./every");

test("Can handle empty array", () => {
  expect(every([], (x) => x > 0)).toBe(true);
});

test("Can test whether all elements in the array pass the test condition", () => {
  const arr = [10, 20, 30, -30, -20, 10];
  expect(every(arr, (x) => x > -50)).toBe(true);
  expect(every(arr, (x) => x === 20)).toBe(false);
});

test("Works on sparse arrays", () => {
  const arr = [2, , 2];
  expect(every(arr, (x) => x !== undefined)).toBe(false);
  expect(every(arr, (x) => x === 2)).toBe(false);
});

test("Can work with strings", () => {
  const words = ["sea", "flat", "park", "lake"];
  expect(every(words, (x) => x.length <= 4)).toBe(true);
});

test("Does not change original array", () => {
  const arr = [2, 3, 4];
  expect(every(arr, (x) => x > 1)).toBe(true);
  expect(arr).toEqual([2, 3, 4]);
});

test("Provides index and original array as the second and third args", () => {
  const arr = [-100, 20, 10, 300, -10];
  expect(every(arr, (x, i, arr) => arr[i] % 2 === x % 10)).toBe(true);
});
