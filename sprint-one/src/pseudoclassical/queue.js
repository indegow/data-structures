var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.head++] = value;
}

Queue.prototype.dequeue = function() {
  let temp = this.storage[this.tail];
  if (this.size() > 0) {
    delete this.storage[this.tail++];
  }
  return temp;
}

Queue.prototype.size = function() {
  return this.head - this.tail;
}
