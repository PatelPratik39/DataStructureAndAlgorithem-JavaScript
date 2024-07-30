
/*
 * Dynamic Programing with tabulation  involves storing the results of all subproblems in a table to avoid redundant calculation
 * and achieving linear time complexity and space complexity that is O(n)
 */
public class FibonacciDynamicPrograming {
    
    public static int fibonacci(int n){

        // base case
        if( n < 2){
            return n;
        }
        int[] dp = new int[n+1];
        dp[0] = 0;
        dp[1] = 1;

        for(int i = 2; i <= n; i++){
            dp[i] = dp[i - 1] + dp[i - 2];
        //  dp[6] = dp[6 - 1] + dp[6 - 2] => 
        //  dp[6] = dp[5] + dp[4] => 
        //  dp[6] = 5 + 3 => 8
        }
        return dp[n];
    }
    public static void main(String[] args) {
        int n = 6;
        System.out.println("Iterative Fibonacci of '" + n + "' is " + fibonacci(n));
    }

}
