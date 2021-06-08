/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */

function minMax(a, b) {
  return [Math.min(a, b), Math.max(a, b)];
}

function sumPairs(A, N) {
  const numbersSet = new Set(A);
  const solutionMap = new Map();
  numbersSet.forEach((number) => {
    const diff = N - number;
    if (diff !== number && numbersSet.has(diff)) {
      const [min, max] = minMax(diff, number);
      solutionMap.set(min, max);
    }
  });
  return [...solutionMap.entries()];
}

module.exports = sumPairs;
