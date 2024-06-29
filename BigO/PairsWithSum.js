function SumOfPair(arr, sum) {
  var len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
    return false;
  }
}
console.log(SumOfPair([1, 3, 7, 4, 5, 6, 7, 6], 9));
console.log(performance.now());

// better from above inmstead using nested loop

function SumOfPair(arr, sum) {
  // lets create an object where properties if an object match with items
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      const item = arr[i];
      obj[item] = true;
    }
  }
//   console.log(obj);
// loop through second arry
}




/*

Most efficent way code usinf Set and in-built functions like has(), inclides()

*/

function SumOfPair(arr, sum) {
const set = new Set();
const len = arr.length;

for(let i=0; i<len; i++){
    if(set.has(arr[i])){
        return true
    }
    set.add(sum = arr[i]);
}
return false;

}
console.log(SumOfPair([1, 3, 7, 4, 5, 6, 7, 6], 9));
