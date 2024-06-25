package linkedLists;

public class Main {
    public static void main ( String[] args ) {
        LinkedList linkedList = new LinkedList(1);
        linkedList.append(2);
        linkedList.append(3);


//        linkedList.getHead();
//        linkedList.getTail();
//        linkedList.getLength();


//        linkedList.printList();
        System.out.println(linkedList.removeLast().value);
        System.out.println(linkedList.removeLast().value);
        System.out.println(linkedList.removeLast().value);
        System.out.println(linkedList.removeLast());

    }
}
