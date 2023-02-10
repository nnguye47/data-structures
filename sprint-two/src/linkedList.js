var LinkedList = function() {
  var list = {}; //{node1, node2}
  list.head = null; //{node1}
  list.tail = null; //list.tail = {value: number, next: nulll}

  //assign the value of tail to be a node with the value of value
  list.addToTail = function(value) {
    list.tail = Node(value);
    //if the head is null
    if (list.head === null) {
      //list.head will now equal list.tail
      list.head = list.tail;
    }

  };

  //goal: remove the current head and make it equal to tail
  list.removeHead = function() {
    //create a variable that has an assigned value of the current head value
    var currentHead = list.head.value;
    //the value of list.heaad is now equal to the current list.tail
    list.head = list.tail;

    //return the saved value of the original list.head
    return currentHead;
  };

  //goal: return true if the list contains a value and return false if it
  list.contains = function(target) {
    //code here
    //if the list.tail.value or the list.head.value === target
    if (list.tail.value === target || list.head.value === target) {
      //return true
      return true;
      //else
    } else {
      //retun false
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

