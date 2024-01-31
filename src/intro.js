// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}
export const calAvg = (numbers) => {
  if (numbers.length === 0) {
    return NaN;
  }
  const sum = numbers.reduce((sum, current) => sum + current, 0);
  return sum / numbers.length;
};

export const Factorial = (arg) => {
  if (arg < 0) return undefined;
  if (arg == 0 || arg == 1) return 1;
  return arg * Factorial(arg - 1);
};
