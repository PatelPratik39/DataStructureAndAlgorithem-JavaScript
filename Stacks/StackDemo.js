class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return holdingPointer.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Amazon");
myStack.push("Udemy");
console.log(myStack.pop()); // Udemy
console.log(myStack.peek().value); // Amazon
console.log(myStack); // Stack with two elements, Amazon on top and Google at the bottom
