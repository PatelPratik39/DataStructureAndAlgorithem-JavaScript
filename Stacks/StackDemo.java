package Stacks;

import java.util.*;



public class StackDemo {

    // create Node class first
class Node {
    String value;
    Node next;

    public Node(String value) {
        this.value = value;
        this.next = null;
    }
}

    private Node top;
    private Node bottom;
    private int length;

    public StackDemo() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    public Node peek() {
        return this.top;
    }

    public void push(String value) {
        Node newNode = new Node(value);
        if (this.length == 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            Node holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    }

    public String pop() {
        if (this.length == 0) {
            return null;
        }
        Node holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        if (this.length == 0) {
            this.bottom = null;
        }
        return holdingPointer.value;
    }

    public boolean isEmpty() {
        return this.length == 0;
    }

    public int getLength() {
        return this.length;
    }

    @Override
    public String toString() {
        List<String> values = new ArrayList<>();
        Node current = this.top;
        while (current != null) {
            values.add(current.value);
            current = current.next;
        }
        return "Stack: " + values.toString();
    }

    public static void main(String[] args) {
        StackDemo myStack = new StackDemo();
        myStack.push("Google");
        myStack.push("Amazon");
        myStack.push("Udemy");
        myStack.push("FedEx");
        System.out.println(myStack); // Output the stack contents

        System.out.println("Popped: " + myStack.pop()); // Popped: FedEx
        System.out.println("Peek: " + myStack.peek().value); // Peek: Udemy
        System.out.println(myStack); // Output the updated stack contents
    }
}
