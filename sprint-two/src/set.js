var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
// using array to store
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
// check if item is in the set
// if not, add
// constant
  var isIn = this.contains(item);
  if (!isIn) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
// linear check
  var isIn = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (item === this._storage[i]) {
      isIn = true;
    }
  }
  return isIn;
};

setPrototype.remove = function(item) {
// linear splice
  for (var i = 0; i < this._storage.length; i++) {
    if (item === this._storage[i]) {
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
