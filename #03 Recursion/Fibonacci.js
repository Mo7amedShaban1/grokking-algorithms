// fb(n) = fb(n - 1) + fb(n - 2)
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....... table

const fibonacci = (n) => {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciTail = (n, curr = 1, prev = 0) => {
  if (n < 1) return curr;
  return fibonacciTail(n - 1, curr + prev, curr);
};

console.log(`Fibonacci non-tail recursion: ` + fibonacci(3));
console.log(`Fibonacci tail recursion: ` + fibonacciTail(3));
