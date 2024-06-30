/*

create a function that return a reversed string

Hi My Name is Chaman
*/


function reverseString(str) {
    // lets check inout first
    if (typeof str !== "string" || !str || str.length < 2) {
      return "That's not a good thing!!!";
    }

    const backwards = [];
    const items = str.length - 1;

    for (let i = items; i >= 0; i--) {
      backwards.push(str[i]);
    }

    return backwards.join("");
}
console.log(reverseString("Hi My Name is Chaman"));

/*
 second way -  reverse a string
*/

function reverseString1(str){
    return str.split('').reverse().join('');
}
console.log(reverseString1("Mr. Chaman Jingoor"));


// thrid way

function reverseString3(str){
    return [...str].reverse().join('');
}
console.log(reverseString("Hi My Name is Chaman"));


// fourth way 
 const reverseString4 = str => [...str].split('').reverse().join('');
 console.log('Mr. Chaman Jingoor');