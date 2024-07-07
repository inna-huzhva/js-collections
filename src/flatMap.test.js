const flatMap = require("./flatMap");

test("Handles an empty array", () => {
  expect(flatMap([], (x) => [x, x])).toEqual([]);
});

test("Can handle numbers", () => {
  const arr = [5, 4, -3, 20, 17, -33, -4, 18];
  const fn = (x) => {
    if (x < 0) {
      return [];
    }
    return x % 2 === 0 ? [x] : [x - 1, 1];
  };
  expect(flatMap(arr, fn)).toEqual([4, 1, 4, 20, 16, 1, 18]);
});

test("Can handle strings", () => {
  const arr = ["it's Sunny in", "", "California"];
  expect(flatMap(arr, (x) => x.split(" "))).toEqual([
    "it's",
    "Sunny",
    "in",
    "",
    "California",
  ]);
});

test("Does not change original array", () => {
  const arr = [1, 2, 3];
  expect(flatMap(arr, (x) => [x, x])).toEqual([1, 1, 2, 2, 3, 3]);
  expect(arr).toEqual([1, 2, 3]);
});

test("Privides index and original array as second ans third arguments", () => {
  const stations = ["New Haven", "West Haven", "Stratford"];
  expect(
    flatMap(stations, (name, i, arr) => {
      if (i === arr.length - 1) return [];
      return [`${name} - ${arr[i + 1]}`];
    }),
  ).toEqual(["New Haven - West Haven", "West Haven - Stratford"]);
});
