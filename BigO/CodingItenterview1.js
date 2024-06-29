/*
Given 2 arrays , Write a function that lets user know (true/false) wheather these two arrays contain common items 
*/

// 2 paramters - arrays
// Return true or false

// BigO(n^2) scenario for above requirement because of nested loops

// const arr1 = ["a", "b", "c", "x"];
// const arr2 = ["z", "r", "y"];

// function containCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(containCommonItem(arr1, arr2));

/*
 Above approch is not good because we have 2 parameters that is 2 arrays  means O(n*n) =  O(n^2). means time Complexity
 Also, If array size is same them O(a*b) thats makes slower process
Better solution below

*/

const arr1 = ["a", 'b', "c", "x"];
const arr2 = ["a", 'z', "y"];

/* 
To reduce time complixy?!!!!,
lets convert arr1 into an Objetc: arr1 => obj{

a: true,
b: true,
c:true
d: true
}
arr2[index] === obj.properties
*/

function containCommonItem(arr1, arr2) {
  // loop through first array and create object where properties === items in thw array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
//   console.log(map);
  // loop through second array and chek if item in second array exists on created object??
  for(let j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
        return true
    }
  }
  return false

}
// console.log(containCommonItem(arr1, arr2));

// O(a+b) Time Complexity instead of O(a*b) Time Complexity

/*
 EFFECIENT Way

*/


// One more better way to write code and more readable

function containCommonItem1(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}
console.log(containCommonItem1(arr1, arr2));

// Time complexity will be O(a+b)


/*
    Built in Function
*/
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "x", "y"];


function containCommonItem2(array3, array4) {

    // lets create a Set to store unique values from first array
    const set1 = new Set(array3);      // this allows for efficient O(1) averare time complexity
    // lets check if any item in the second array exists in the set

    for(const item of array4){
        if(set1.has(item)){
            return true
        }
    }
    return false;
}
// Ensure the result is printed to the console
console.log(containCommonItem2(arr1, arr2));


// The time complexity is improved to linear time due to the use of a Set, which provides O(1) time complexity for lookups on average.