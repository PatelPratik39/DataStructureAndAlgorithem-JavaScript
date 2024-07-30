


public class FibonacciIterative{


    // this iterative approch, calculate fibonacci numbers in linear time O(n) and uses constant space that is O(1)
    public static int fibonacci(int n){
        if(n < 2){
            return n;
        }
        int a = 0, b = 1;

        for(int i = 2; i<= n; i++ ){
            int sum = a + b;
            a = b;
            b = sum;
        }
        return b;
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Iterative Fibonacci of " + n + " is " + fibonacci(n));
    }
}