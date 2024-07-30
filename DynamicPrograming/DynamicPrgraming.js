let calculations = 0;

function fibonacci(n) {
  // time Complexity  = O(2^n)
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacciMaster() {
  // time Complexity  = O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();

console.log("Slow Calculations ", fibonacci(50));
console.log("Dynamic Programming : ", fasterFib(20));
console.log("We did ", calculations + " calculation.");
