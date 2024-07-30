/*
 * 

70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
 */


package LeetCode;

public class ClimbingStairs {
    public int climbStairs(int n){
        if(n == 1) return 1;
        if(n == 2) return 2;

        int first = 1;
        int second = 2;

        for(int i = 3; i<= n; i++){
            int third = first + second;
            first = second;
            second = third;
        }
        return second;
    }
    
    public static void main(String[] args) {
        ClimbingStairs solution = new ClimbingStairs();
        
        int n1 = 2;
        System.out.println("Number of ways to climb " + n1 + " stairs: " + solution.climbStairs(n1));  // Output: 2

        int n2 = 3;
        System.out.println("Number of ways to climb " + n2 + " stairs: " + solution.climbStairs(n2));  // Output: 3

        int n3 = 4;
        System.out.println("Number of ways to climb " + n3 + " stairs: " + solution.climbStairs(n3));  // Output: 5
    }
}
