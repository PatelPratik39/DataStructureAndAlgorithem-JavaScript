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
    public  void printList(){
        Node temp = head;
        while (temp != null){
            System.out.println(temp.value);
            temp = temp.next;
        }
    }

    public void getHead() {
        System.out.println("Head : " + head.value);
    }
    public void getTail() {
        System.out.println("Tail : " + tail.value);
    }
    public void getLength(){
        System.out.println("Length : "+ length);
    }

    public void append(int value){
        Node newNode = new Node(value);
        if (length == 0) {
            head = newNode;
        } else  {
            tail.next = newNode;
        }
        tail = newNode;
        length++;
    }
//    remove last Node

    public Node removeLast(){

//        first check that linkedList length is 0 or not
        if(length == 0) return null;
//        set head and tail as temp and pre
        Node temp = head;
        Node pre =  tail;

//        iterating over LinkedList using While loop
//        it checks that if temp.next node is not null, then set pre as temp
//        and send temp to next

        while(temp.next != null){
            pre = temp;
            temp = temp.next;
        }
//        set tail as pre and tail.next as null
        tail = pre;
        tail.next = null;
//        decrement the length of the linked list
        length--;
//        if length is zero, then set head and tail null
        if(length == 0){
            head = null;
            tail = null;
        }
//        return temp
        return temp;
    }

//    prepend value
    public void prepend(int value) {
        Node newNode = new Node(value);
        if(length == 0){
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
        length++;
    }


}
