var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[++this.counter] = value;
};

stackMethods.pop = function(value) {
  let temp = this.storage[this.counter];
  if (this.size() > 0) {
    delete this.storage[this.counter--];
  }
  return temp;
};

stackMethods.size = function() {
  return this.counter;
};