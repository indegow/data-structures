

// Instantiate a new graph
var Graph = function() {
  this.valueArrays = [];
  this.edgeArrays = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.valueArrays.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.valueArrays.indexOf(node) !== -1) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.valueArrays.indexOf(node);
  if (index !== -1) {
    this.valueArrays.splice(index, 1);
  }
  for (var i = 0; i < this.valueArrays.length; i++) {
    if (node > this.valueArrays[i]) {
      this.removeEdge(this.valueArrays[i], node);
    } else {
      this.removeEdge(node, this.valueArrays[i]);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
var tempArr = [fromNode, toNode].sort((a, b) => a - b);
  for (var i = 0; i < this.edgeArrays.length; i++) {
    if (this.edgeArrays[i][0] === tempArr[0] && this.edgeArrays[i][1] === tempArr[1]) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var tempArr = [fromNode, toNode].sort((a, b) => a - b);
  this.edgeArrays.push(tempArr);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var tempArr = [fromNode, toNode].sort((a, b) => a - b);
  var tempIndx = 0;
  for (var i = 0; i < this.edgeArrays.length; i++) {
    if (this.edgeArrays[i][0] === tempArr[0] && this.edgeArrays[i][1] === tempArr[1]) {
      tempIndx = i;
    }
  }
  this.edgeArrays.splice(tempIndx, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.valueArrays.map(ele => cb(ele));

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


