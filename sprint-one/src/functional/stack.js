var Stack = function() {
  var someInstance = {};
  someInstance.counter = 0;
  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.counter++;
    someInstance.storage[someInstance.counter] = value;
  };

  someInstance.pop = function() {
    let temp = someInstance.storage[someInstance.counter];
    if (someInstance.counter > 0) 
      delete someInstance.storage[someInstance.counter--];
    return temp;
  };

  someInstance.size = function() {
    return someInstance.counter;
  };

  return someInstance;
};