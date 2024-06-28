// const name = ["mowglee"];
// const names = [
//   "Bagheera",
//   "Mowgleee",
//   "Bagheera",
//   "Baloo",
//   "Sherkhan",
//   "Simba",
//   "Kaa",
//   "Zakhira",
//   "Lallu"
// ];

// const large = new Array(10000).fill('Balloo');

// function findNemo(array) {
// //   let time0 = performance.now();

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "Balloo") {
//       console.log("Found Name");
//     }
//   }
// }
// findNemo(large); //O(n) --> Linear Time


const boxes = [0,1,2,3,4,5,6,7,8,9]

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);  //O(1) operation
  console.log(boxes[1]);  // O(1) Operation again sp total 2 single operation so constant time
}
logFirstTwoBoxes(boxes);    // -> O(1) = constant Time