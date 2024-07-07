const filter = require("./filter");

test("Handles empty array", () => {
  expect(filter([], (x) => x >= 0)).toEqual([]);
});

test("Can select numbers in range", () => {
  expect(
    filter([-4, 100500, -100, 0, 1, 5, 15, 148], (x) => x >= 2 && x <= 30),
  ).toEqual([5, 15]);
});

test("Can filter objects", () => {
  const arr = [
    { name: "Vasyl", species: "kit" },
    { name: "Duke", species: "pes" },
    { name: "Patron", species: "pes" },
    { model: "Focus", color: "blue" },
    { name: "Hrytsko", species: "leleka" },
  ];
  expect(filter(arr, (x) => x.species === "pes")).toEqual([
    { name: "Duke", species: "pes" },
    { name: "Patron", species: "pes" },
  ]);
});

test("Can filter strings", () => {
  expect(
    filter(["a", "b", "", "bac", "bc", "mama"], (x) => !x.includes("a")),
  ).toEqual(["b", "", "bc"]);
});

test("Does not change original array", () => {
  const arr = [-12, 17, 0, -100, 16];
  expect(filter(arr, (x) => x > 0)).toEqual([17, 16]);
  expect(arr).toEqual([-12, 17, 0, -100, 16]);
});

test("Provides index as the second arg", () => {
  expect(filter([1, 2, 3, 4, 5], (x, i) => i % 2 === 0)).toEqual([1, 3, 5]);
});

test("Provides original array as the third arg", () => {
  expect(filter([1, 2, 3], (x, i, arr) => x === arr.length)).toEqual([3]);
});
