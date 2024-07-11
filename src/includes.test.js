const includes = require("./includes");

test("Handles empty array", () => {
  expect(includes([], 3)).toBe(false);
});

test("Determines if array includes or not a certain value", () => {
  const arr = [1, 3, 8, -16, 13, -37];
  expect(includes(arr, 8)).toBe(true);
  expect(includes(arr, 9)).toBe(false);
});

test("Can work with strings", () => {
  const pets = ["pes", "kit", "piton", "papuha"];
  expect(includes(pets, "piton")).toBe(true);
  expect(includes(pets, "ravlyk")).toBe(false);
});

test("Cannot be used for searching of NaN", () => {
  const arr = [true, , "Hello", NaN, 1234];
  expect(includes(arr, NaN)).toBe(false);
});

test("Can search for undefined in a sparse array", () => {
  const arr = [true, , "Hello", NaN, 1234];
  expect(includes(arr, undefined)).toBe(true);
});

test("Can start searching for an element from specified index of array", () => {
  const arr = [5, 5, 11, 11, -8, 6];
  expect(includes(arr, 11, 3)).toBe(true);
  expect(includes(arr, 11, 4)).toBe(false);
});

test("If specified index is less than 0, searching starts from startIndex 0", () => {
  const arr = ["a", "b", "c", "d", "e"];
  expect(includes(arr, "d", -3)).toBe(true);
});

test("Can handle startIndex bigger than array length", () => {
  const arr = [5, 5, 11, 11, -8, 6];
  expect(includes(arr, 6, 6)).toBe(false);
});

test("Does not change original array", () => {
  const arr = [5, 5, 11, 11, -8, 6];
  expect(includes(arr, -12)).toBe(false);
  expect(arr).toEqual([5, 5, 11, 11, -8, 6]);
});
