package linkedLists;

public class LinkedList {
    private Node head;
    private Node tail;
    private int length;

//    Inner class Node

    class Node {
        int value;
        Node next;

        Node(int value){
            this.value = value;
        }
    }

    public LinkedList(int value){
        Node newNode = new Node(value);
        head = newNode;
        tail = newNode;
        length = 1;
    }
}
