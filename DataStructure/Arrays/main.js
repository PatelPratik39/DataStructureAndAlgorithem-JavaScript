const strings = ['a','b','c','d','e']
// 4 * 4 = 16 byte of storage in memory

console.log(strings[2]);  //BigO O(1)

//push
strings.push('f');   // BigO O(1)
console.log(strings);

// pop
strings.pop();
strings.pop();  // BigO O(1)

console.log(strings);

// unshift()

strings.unshift('x')   //BigO O(n)

// splice
strings.splice(2,0, 'spliceString') // BigO O(n)

console.log(strings);


/*
 look up an element in array -> Time complexity will be O(1)
  append an element in array -> Time Complexity will be O(1)
  insert an element in array -> Time Complexity will be O(n), beacuse memory need to resized for all elements
  delete an element in array -> Time Complexity will be O(n), beacuse memory need to resized for all elements
*/

// Two types of arrays -> Static Array and Dynamic Array