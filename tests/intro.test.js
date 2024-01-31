import { describe, it, test, expect } from "vitest";
import { calAvg, fizzBuzz, max, Factorial } from "../src/intro";
describe("max", () => {
  it("should return the first argument if it is greater.", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater.", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if they are equal.", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("FizzBuzz", () => {
  it("Should return fizzbuzz if argument is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("Should return fizzbuzz if argument is divisible by 3 ", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("Should return fizzbuzz if argument is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("Should return argument by string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

describe("calculate Average", () => {
  it("should expect NaN if array is empty", () => {
    expect(calAvg([])).toBe(NaN);
  });
  it("should calculate the average of a numbers if only one", () => {
    expect(calAvg([1])).toBe(1);
  });
  it("should calculate the average of two elements", () => {
    expect(calAvg([1, 2])).toBe(1.5);
  });
  it("should calculate the average of three elements", () => {
    expect(calAvg([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("Should return 1 if arg is 0", () => {
    expect(Factorial(0)).toBe(1);
  });
  it("Should return 1 if arg is 1", () => {
    expect(Factorial(1)).toBe(1);
  });
  it("Should return 2 if arg is 2", () => {
    expect(Factorial(2)).toBe(2);
  });
  it("Should return 24 if arg is 4", () => {
    expect(Factorial(4)).toBe(24);
  });
  it("Should return undefined if arg is negative", () => {
    expect(Factorial(-1)).toBeUndefined();
  });
});
