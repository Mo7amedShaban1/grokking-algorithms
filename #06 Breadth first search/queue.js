// A queue is called a FIFO data structure it has only two operations enqueue and dequeue.
// Implement queue data structure.
class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(val) {
    this.elements.push(val);
    return this.elements;
  }

  dequeue() {
    return this.elements.shift();
  }
}
