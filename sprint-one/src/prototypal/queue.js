var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  var container = {};
  instance.storage = container;

  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  //get the array of keys
  var keys = Object.keys(this.storage);

  //return length of the arrays
  return keys.length;
};

queueMethods.enqueue = function(string) {
  //get the array of keys
  var keys = Object.keys(this.storage);
  //the the index of the last element
  var lastIndex = keys.length - 1;
  //get the value of the last index
  var lastValue = keys[lastIndex];

  //create key-value pair in object
  //value of last index is now the key
  //value of the property is now string
  this.storage[lastValue + 1] = string;

  //return the length of the array of keys
  return keys.length;
};

queueMethods.dequeue = function() {
  //get the array of keys
  var keys = Object.keys(this.storage);
  //get the element at the first index
  var firstElement = keys[0];
  //save the value of the key that matches the element
  var value = this.storage[firstElement];

  //delete the key
  delete this.storage[firstElement];
  //return the saved value
  return value;
};




