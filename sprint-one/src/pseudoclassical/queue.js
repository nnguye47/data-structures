var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function() {
  var keys = Object.keys(this);

  return keys.length;
};

Queue.prototype.enqueue = function(string) {
  //get the array of keys referencing
  var keys = Object.keys(this);
  //get the element at the last index
  var lastElement = keys[keys.length - 1];
  //create a key using the lst element + 1 with a value of string
  this[lastElement + 1] = string;

  //retunr length of the array of keys
  return keys.length;
};

Queue.prototype.dequeue = function() {
  //get the array of keys
  var keys = Object.keys(this);
  //get the first element
  var firstElement = keys[0];
  //create a variable saving the value of the key that matches the first element
  var value = this[firstElement];


  //delete the key that matches the first element
  delete this[firstElement];
  //return the saved value
  return value;
};

var Final = new Queue();


