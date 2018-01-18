class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.head++] = value;
  }

  dequeue() {
    let temp = this.storage[this.tail];
    if (this.size() > 0) {
      delete this.storage[this.tail++];
    }
    return temp; 
  }

  size() {
    return this.head - this.tail;
  }

}
