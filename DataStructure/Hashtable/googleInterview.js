// firstRecurringCharacter-exercise

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input) {
//   // Outer loop to iterate over the array
//   for (let i = 0; i < input.length; i++) {
//     // Inner loop to compare the current element with the rest of the array
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

function firstRecurringCharacter1(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    // console.log(map[input[i]]);
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }

  return undefined;
}

function firstRecurringCharacter2(input) {
  const num = new Set();
  for (let i = 0; i < input.length; i++) {
    // console.log(`Checking input[${i}] = ${input[i]}`);
    if (num.has(input[i])) {
      return input[i];
    } else {
      num.add(input[i]);
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter1([2, 3, 4, 5]));
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
