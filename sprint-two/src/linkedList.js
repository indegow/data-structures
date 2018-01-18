var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var tempValue = list.head.value;
      list.head = list.head.next;
      return tempValue;
    }
  };

  list.contains = function(target) {
    var pointer = list.head;
    
    while (pointer.next !== null) {
      if (pointer.value === target) {
        return true;
      } else {
        pointer = pointer.next;
      }
    }

    if (pointer.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var list1 = LinkedList()
list1.addToTail(5);
list1.addToTail(6);
list1.addToTail(7);

console.log(list1.contains(7))