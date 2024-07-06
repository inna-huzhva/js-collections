const forEach = require("./forEach");

test("Handles empty array", () => {
  let acc = 0;
  expect(forEach([], (x) => acc += x)).toBe(undefined);
  expect(acc).toBe(0);
});

test("Can work with numbers", () => {
  let acc = 0;
  expect(forEach([-1, 0, 5, 8, 100], (x) => acc += x)).toBe(undefined);
  expect(acc).toBe(112);
});

test("Can concatenate strings", () => {
  let acc = "";
  expect(forEach(["a", " ", "abba"], (x) => acc += x)).toBe(undefined);
  expect(acc).toBe("a abba");
});

test("Does not change original array", () => {
  const arr = ["a", "", "abba"];
  let acc = "";
  expect(forEach(arr, (x) => acc += x.toUpperCase())).toBe(undefined);
  expect(arr).toEqual(["a", "", "abba"]);
  expect(acc).toBe("AABBA");
});

test("Provides index as the second arg", () => {
  let acc = 0;
  expect(forEach([1, 2, 3], (x, i) => acc += x ** i)).toBe(undefined);
  expect(acc).toBe(12);
});

test("Provides original array as the third arg", () => {
  let acc = 0;
  expect(forEach([1, 2, 1], (x, i, arr) => acc += x + arr[i])).toBe(undefined);
  expect(acc).toBe(8);
});
