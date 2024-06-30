/*
1. Two Sum
Easy
Topics
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */


function twoSum(nums, target){
    const hashMap = new Map();

    for(let i = 0; i < nums.length; i ++){
        const complement = target - nums[i];
        if(hashMap.has(complement)){
            return [hashMap.get(complement), i];
        }
        hashMap.set(nums[i],i);
    }
    return [];

}
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
console.log(twoSum([3, 3], 6));          // Output: [0, 1]
/*



lets take nums = [3,2,4] and target value is 6
so current number is 3 => num[0] = 3
calculate complement : target - num[0] = 6 - 3 = 3
now check this complement 3 is in hashmap using has(), and its false, we dont have 3 in hashmap for now, 
but now i am storing this 3 into hashmap with index number 0.

now take current number from 1 index position that is 2,

calculate target - num[1] = 6 - 2 = 4
check 4 is in hashmap or not?? ,
its not present so i need to store 2 in hashmap as index position at 1


now take current number num[]
 from 2nd index that is 4, so target value is 6 - 4 = 2;
 now check 2 complement is presnet in hashmap or not?
 now 2 is present in hashmap so its true
 
 and 2 is at index position of 1 so output will be  [1,2]
 
 */