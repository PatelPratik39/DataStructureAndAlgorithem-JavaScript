
/*
DROP Constant

 */
/*
 n * n = n^2
 O(n^2)
 */

public class DropConstant {

    public static void printItems(int n){
        for(int i= 0; i < n; i++){
            for(int j= 0; j < n; j++){
                System.out.println(j + " " + j);
            }
        }
    }

    public static void main ( String[] args ) {
        printItems(10);
    }
}
