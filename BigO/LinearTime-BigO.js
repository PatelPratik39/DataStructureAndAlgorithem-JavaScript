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
let t1 = performance.now()
console.log(t1);
const compressAllBoxes = names => {
    names.forEach((name) => console.log(name));
}
compressAllBoxes(names);
let t2 = performance.now();
console.log(t1);
console.log("performance = " + (t2 - t1));