// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  // below three assignments are constants so it will run once so O(1); TimeComplexity will be O(1)
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  //   below loop runs input time with 3 constants so O(n)+ O(n)+ O(n) =  3 O(n) that simplyfies O(n)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  //   below loop runs input time with 2 constants so  O(n)+ O(n) =  2 O(n) that simplyfies O(n)
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  //   below three assignment is constant so it will run once so O(1); TimeComplexity will be O(1)
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n)

// Total Time complexity =  O(1) + O(n) + O(n) + O(1) = O(2) + O(2n) which simplifies to O(n)
