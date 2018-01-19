

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArray = this._storage.get(index);
  var tempArr = [k, v];
  var putChecker = false;
  if (tempArray === undefined) {
    tempArray = [];
    this._storage.set(index, tempArray);
  }
  
  for (var i = 0; i < tempArray.length; i++) {
    if (tempArray[i][0] === k) {
      putChecker = true;
      tempArray[i][1] = v;
    }
  }
  if (!putChecker) {
    tempArray.push(tempArr);
    this._storage.set(index, tempArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArray = this._storage.get(index);

  for (var i = 0; i < tempArray.length; i++) {
    if (tempArray[i][0] === k) {
      return tempArray[i][1];
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArray = this._storage.get(index);
  for (var i = 0; i < tempArray.length; i++) {
    if (tempArray[i][0] === k) {
      tempArray.splice(i, 1);
    }
  }
};



/*

  var tempArr = [k, v];
  var tempArray = this._storage.get(index);
  if (tempArray === null) {
    tempArray = [];
  }
  for (var i = 0; i < tempArray.length; i++) {
    if (tempArray[i][0] === k) {
      tempArray[i] = tempArr;
    } 
  }
  tempArray.push(tempArr);


 * Complexity: What is the time complexity of the above functions?
 */



var obj1 = { x: 10 };

var obj2 = Object.create(obj1);

var obj3 = Object.create(obj2);

obj2.x = 20;
var result = obj3.x + 10;

console.log(result);