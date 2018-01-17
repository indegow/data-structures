var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};
Stack.prototype.push = function(value) {
  this.storage[++this.counter] = value;
}

Stack.prototype.pop = function() {
  let temp = this.storage[this.counter];
  if (this.size() > 0) delete this.storage[this.counter--];
  return temp;
}

Stack.prototype.size = function() {
  return this.counter;
}