var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.head = 0;
  storage.tail = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.head++] = value;
  };

  someInstance.dequeue = function() {
    let temp = storage[storage.tail];
    if (someInstance.size() > 0) {
      delete storage[storage.tail++];
    }
    return temp;
  };

  someInstance.size = function() {
    return storage.head - storage.tail;
  };

  return someInstance;
};