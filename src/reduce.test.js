const reduce = require("./reduce");

test("Handles an empty array", () => {
  expect(reduce([], (a, b) => a + b, 0)).toBe(0);
});

test("Can calculate product of numbers", () => {
  const arr = [3, 5, -1, 6];
  expect(reduce(arr, (a, b) => a * b, 10)).toBe(-900);
});

test("Can take the first element of array as an accumulator", () => {
  const arr = [8, 6, 12, 0, 5];
  expect(reduce(arr, (a, b) => a - b)).toBe(-15);
});

test("Provides index and original array as third and fourth parameters", () => {
  const arr = [1, 3];
  const fn = (a, b, i, arr) => a + b + i + arr.length;
  expect(reduce(arr, fn, 0)).toBe(9);
});

test("Can help to remove duplicates from array", () => {
  const arr = [1, 2, 2, 3, 11, 1, 3, 8];
  const fn = (acc, x) => {
    if (!acc.includes(x)) {
      acc.push(x);
    }
    return acc;
  };
  expect(reduce(arr, fn, [])).toEqual([1, 2, 3, 11, 8]);
});

test("Can reverse an array", () => {
  const arr = ["a", "b", "c"];
  const fn = (acc, x) => [x, ...acc];
  expect(reduce(arr, fn, [])).toEqual(["c", "b", "a"]);
});

test("Can concatenate strings", () => {
  const arr = ["London", "is", "the", "capital", "of", "the", "GB"];
  const fn = (sentence, w) => `${sentence} ${w}`;
  expect(reduce(arr, fn)).toEqual("London is the capital of the GB");
});

test("Does not change original array", () => {
  const arr = [1, 2, 3, 4];
  expect(reduce(arr, (a, b) => a + b, 0)).toBe(10);
  expect(arr).toEqual([1, 2, 3, 4]);
});
