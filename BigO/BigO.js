const name = ["mowglee"];
const names = [
  "Bagheera",
  "Mowgleee",
  "Bagheera",
  "Baloo",
  "Sherkhan",
  "Simba",
  "Kaa",
  "Zakhira",
  "Lallu"
];

const large = new Array(10000).fill('Balloo');

function findNemo(array) {
//   let time0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Balloo") {
      console.log("Found Name");
    }
  }
}
findNemo(large); //O(n) --> Linear Time
