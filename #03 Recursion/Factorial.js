// Factorial of 5 = 5 * 4 * 3 * 2 * 1

// Head Recursion
function headFactorial(n) {
  if (n <= 1) return n;
  return n * headFactorial(n - 1);
}

// Tail Recursion
function tailFactorial(n, res = 1) {
  if (n === 0) return res;
  return tailFactorial(n - 1, n * res);
}
// 4: (0, 6) => result is 6
// 3: (1, 6)
// 2: (2, 3)
// 1: (3, 1)

console.log(headFactorial(3));
console.log(tailFactorial(3));
