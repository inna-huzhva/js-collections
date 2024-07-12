const concat = require("./concat");

test("Handles one empty array", () => {
  expect(concat([])).toEqual([]);
});

test("Handles many empty arrays", () => {
  expect(concat([], [], [])).toEqual([]);
});

test("Handles one array as an argument", () => {
  const animals = ["Cat", "Dog", "Cow", "Frog", "Crocodile", "Tiger"];
  expect(concat(animals)).toEqual([
    "Cat",
    "Dog",
    "Cow",
    "Frog",
    "Crocodile",
    "Tiger",
  ]);
});

test("Handles two arrays as arguments", () => {
  const arr1 = ["Tom", "Kate", "Lisa", "Olaf", "Endy"];
  const arr2 = [5, 2, 8, 16];
  expect(concat(arr1, arr2)).toEqual([
    "Tom",
    "Kate",
    "Lisa",
    "Olaf",
    "Endy",
    5,
    2,
    8,
    16,
  ]);
});

test("Handles sparse arrays", () => {
  const arr1 = [1, , 3];
  const arr2 = [4, , 6];
  expect(concat(arr1, arr2)).toEqual([1, , 3, 4, , 6]);
});

test("Handles many arrays as arguments", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const arr4 = [10, 11, 12];
  expect(concat(arr1, arr2, arr3, arr4)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
});

test("Does not change original arrays", () => {
  const arr1 = ["a", "b", "c"];
  const arr2 = [true, false];
  expect(concat(arr1, arr2)).toEqual(["a", "b", "c", true, false]);
  expect(arr1).toEqual(["a", "b", "c"]);
  expect(arr2).toEqual([true, false]);
});
