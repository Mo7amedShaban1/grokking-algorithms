class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    const node = new Node(val);
    var current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.head);
