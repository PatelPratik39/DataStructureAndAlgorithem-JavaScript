import java.util.HashMap;

public class FibonacciMemoization {

    // Time complexity of O(n) becuase it stores only necessary intermediate results and easy to implement with recursions

    public static int fibonacci(int n, HashMap<Integer, Integer> memo){
            // base case
        if(n < 2){
            return n;
        }

        if(memo.containsKey(n)){
            return memo.get(n);
        }
        int result =  fibonacci(n-1, memo) + fibonacci(n-2, memo);
        memo.put(n, result);
        return result;

    }

    public static void main(String[] args) {
        HashMap<Integer, Integer> memo = new HashMap<>();

        int n = 20;
        System.out.println("Iterative Fibonacci of '" + n + "' is " + fibonacci(n , memo));
    }
}
