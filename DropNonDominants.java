
/*

Drop Non-Dominants
O(n^2) and O(n)  = O(n^2 + n)
 */


public class DropNonDominants {

//    Big O: Drop Non-constants

    public static void printItems(int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                System.out.println(i + " " + j);
            }
        }
        for(int k = 0; k < n; k++){
            System.out.println(k);
        }
    }

//     Big O: O(1) -> Most efficient Big O

//    public static int addItems(int n){
//        return n + n + n;
//    }




    public static void main ( String[] args ) {
            printItems(10);
    }
}
