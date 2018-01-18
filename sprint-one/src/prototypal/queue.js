var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.head++] = value;
};

queueMethods.dequeue = function() {
  let temp = this.storage[this.tail];
  if (this.size() > 0) {
    delete this.storage[this.tail++];
  }
  return temp;
};

queueMethods.size = function() {
  return this.head - this.tail;
};