const slice = require("./slice");

test("Handles an empty array", () => {
  expect(slice([])).toEqual([]);
});

test("Takes copy of array if no boundaries specified", () => {
  const arr = [true, 123, "mama", Infinity, NaN, false];
  expect(slice(arr)).toEqual([true, 123, "mama", Infinity, NaN, false]);
});

test("Can slice array from specified start index", () => {
  const pets = ["Kit", "Pes", "Pavuk", "Papuha", "Krysa"];
  expect(slice(pets, 2)).toEqual(["Pavuk", "Papuha", "Krysa"]);
});

test("Can slice array between specified start and end indices", () => {
  const pets = ["Kit", "Pes", "Pavuk", "Papuha", "Krysa"];
  expect(slice(pets, 2, 4)).toEqual(["Pavuk", "Papuha"]);
});

test("If end index is less than 0 returns an empty array", () => {
  const arr = [-1223, 0, 1, 3, -8, 16, -43];
  expect(slice(arr, 2, -3)).toEqual([]);
});

test("If start index is bigger than array length returns an empty array", () => {
  const arr = [-1223, 0, 1, 3, -8, 16, -43];
  expect(slice(arr, 8, 3)).toEqual([]);
});

test("If start index is less than 0, it starts from 0", () => {
  const arr = [-1223, 0, 1, 3, -8, 16, -43];
  expect(slice(arr, -5, 3)).toEqual([-1223, 0, 1]);
});

test("If end index is bigger than array length, it ends at array length", () => {
  const arr = [-1223, 0, 1, 3, -8, 16, -43];
  expect(slice(arr, 3, 16)).toEqual([3, -8, 16, -43]);
});

test("Throws an error if end is less than start", () => {
  const arr = [-1223, 0, 1, 3, -8, 16, -43];
  expect(() => slice(arr, 4, 1)).toThrow(Error);
});

test("Handles sparse array", () => {
  const arr = [1, , 3, , 5, -20];
  expect(slice(arr, 1, 4)).toEqual([, 3, ,]);
});

test("Does not change original array", () => {
  const arr = ["a", "b", "c", "d"];
  expect(slice(arr, 2)).toEqual(["c", "d"]);
  expect(arr).toEqual(["a", "b", "c", "d"]);
});
