// n! = n * (n-1) * (n-2) * .......
// 3! = 3 * 2 * 1 * 1

function factorial(n) {
  if (n <= 1) return n;
  var x = n;

  while (n > 1) {
    x = x * (n - 1);
    n--;
  }
  return x;
}

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

console.log(`Factorial iteration: ` + factorial(11));
console.log(`Head recursion: ` + headFactorial(11));
console.log(`Tail recursion`, tailFactorial(11));
