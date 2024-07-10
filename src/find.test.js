const find = require("./find");

test("Handles empty array", () => {
  expect(find([], (x) => x > 3)).toBe(undefined);
});

test("Finds first element according to condition", () => {
  const arr = [5, 11, -8, 6];
  expect(find(arr, (x) => x < 0)).toBe(-8);
});

test("If element does not exist returns undefined", () => {
  const arr = [true, true, true];
  expect(find(arr, (x) => !x)).toBe(undefined);
});

test("Returns undefined if search for undefined even if there is no undefined", () => {
  const arr = [1, 3];
  expect(find(arr, (x) => x === undefined)).toBe(undefined);
});

test("Returns first element that matches condition", () => {
  const arr = [1, -10, 20, 100, 18, 20, 2];
  expect(find(arr, (x) => x > 10)).toBe(20);
});

test("Provides index and original array as second and third arguments", () => {
  const arr = ["b", "a", "b", "c", "d"];
  const fn = (x, i, arr) => x === "b" && arr[i - 1] === "a";
  expect(find(arr, fn)).toBe("b");
});

test("Does not change original array", () => {
  const arr = [5, 5, 11, 11, -8, 6];
  expect(find(arr, (x) => x + 6 === 11)).toBe(5);
  expect(arr).toEqual([5, 5, 11, 11, -8, 6]);
});
