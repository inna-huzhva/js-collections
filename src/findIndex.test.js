const findIndex = require("./findIndex");

test("Handles empty array", () => {
  expect(findIndex([], (x) => x > 3)).toBe(-1);
});

test("Finds first index according to condition", () => {
  const arr = [5, 11, -8, 6];
  expect(findIndex(arr, (x) => x < 0)).toBe(2);
});

test("If element does not exist returns -1", () => {
  const arr = [true, true, true];
  expect(findIndex(arr, (x) => !x)).toBe(-1);
});

test("Can search for index of undefined in a sparse array", () => {
  const arr = [1, , 3];
  expect(findIndex(arr, (x) => x === undefined)).toBe(1);
});

test("Returns index of first element that matches condition", () => {
  const arr = [1, -10, 20, 100, 18, 20, 2];
  expect(findIndex(arr, (x) => x > 10)).toBe(2);
});

test("Provides index and original array as second and third arguments", () => {
  const arr = ["b", "a", "b", "c", "d"];
  const fn = (x, i, arr) => x === "b" && arr[i - 1] === "a";
  expect(findIndex(arr, fn)).toBe(2);
});

test("Does not change original array", () => {
  const arr = [5, 5, 11, 11, -8, 6];
  expect(findIndex(arr, (x) => x + 6 === 11)).toBe(0);
  expect(arr).toEqual([5, 5, 11, 11, -8, 6]);
});
