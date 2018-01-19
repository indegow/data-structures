var BinarySearchTree = function(value) {

  var newTree = Object.create(BSTMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BSTMethods = {};

BSTMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  if (value > this.value && this.right === null) { this.right = newNode; }
  if (value < this.value && this.left === null) { this.left = newNode; }
  if (value < this.value) { this.left.insert(value); }
  if (value > this.value) { this.right.insert(value); }
};

BSTMethods.contains = function(val) {
  if (this.value === val) { return true; }
  if (val < this.value && this.left === null) { return false; }
  if (val > this.value && this.right === null) { return false; }
  if (val < this.value) { return this.left.contains(val); }
  if (val > this.value) { return this.right.contains(val); }

};

BSTMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) { this.left.depthFirstLog(cb); }
  if (this.right) { this.right.depthFirstLog(cb); }
};