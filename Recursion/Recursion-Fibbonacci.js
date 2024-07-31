/*
Givrn a number N return the index value og the fibbonacci sequence, whenre the sequence is: 
//0,1,1,2,3,5,8,13,21,34,......
The Pattern of the sequence is that each value is sum of the 2 previous values, that means that for N=5 -> 2+3 
*/

function fibbonacciIterative(n){
    let arr = [0,1];
    for(let i = 2; i < n + 1; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }

    return arr[n];
}

function fibbonacciRecursive(n){
    // base case
    if(n < 2){
        return n;
    }
    return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
}
// console.log(fibbonacciRecursive(21));
console.log(fibbonacciIterative(5));