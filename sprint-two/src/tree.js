var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var leaf = Tree(value);
  this.children.push(leaf);
};

treeMethods.contains = function(target) {
  var answer  = false;
  function traverse(target) {
    if (this.children.length === 0) {
      if (this.value === target) {
        answer = true;
      }
    }

    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        answer = true;
      } 
    }
  }
  traverse.call(this, target);
  return answer;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
/* if (this.value === target) {
  //   return true;
  // }

  

  // if (this.children.length) {
  //   for (var i = 0; i < this.children.length; i++) {
  //     if (this.children[i].value === target) { 
  //       return true; 
  //     } else {
  //       this.children[i].contains(target);
  //     }
  //   }
  // } 

  // return false;
*/