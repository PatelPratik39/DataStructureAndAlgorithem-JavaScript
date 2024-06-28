// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // Time Complexity =  O(1)
  a = 50 + 3; // Time Complexity = O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // Time Complexity = O(n)
    let stranger = true; //Time Complexity =  O(n)
    a++; // Time Complexity = O(n)
  }
  return a; // Time Complexity =O(1)
}

// Combining the Time Complexities: The constant time operations outside the loop contribute O(1) + O(1) + O(1) = O(1).
// The loop runs n times (where n is the length of the input array), and within each iteration, 
// there are constant time operations and a function call that we assume takes constant time. 
// So, the operations inside the loop contribute O(n) + O(n) + O(n) = 3 O(n), which simplifies to O(n).

// the Big O notation of the function funChallenge is O(n).


// Combining the above, the total time complexity of the function is O(1) + O(n).
// However, O(n) dominates O(1), the overall time complexity is:  O(n)