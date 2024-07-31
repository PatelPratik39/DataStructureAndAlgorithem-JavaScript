/*
find out 2 functions that finds the factorials of any number. One should be recursive and other should be iterative using for loop

*/

function findFactorialUsingRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialUsingRecursive(number - 1);
}

function findFactorialUsingIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}
console.log(findFactorialUsingRecursive(5));
// console.log(findFactorialUsingIterative(5));
