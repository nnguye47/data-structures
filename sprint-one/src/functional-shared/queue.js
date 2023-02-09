var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  var container = {};
  var newInstance = _.extend(instance, queueMethods);
  newInstance.storage = container;

  return newInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  //get the length of the array of keys
  var keys = Object.keys(this.storage);


  //return length of the array of keys
  return keys.length;
};

queueMethods.enqueue = function(value) {
  //get the array of keys
  var keys = Object.keys(this.storage);
  //get the length of the array of keys
  var keysLength = keys.length;
  //get the index of the last element
  var lastIndex = keysLength - 1;
  //get the value of the last index in the array
  var lastValue = keys[lastIndex];
  //add value to storage with a key of lastIndex + 1
  this.storage[lastValue + 1] = value;


  //return length of array of keys
  return keys.length;
};

queueMethods.dequeue = function() {
  //get the array of keys
  var keys = Object.keys(this.storage);
  //get the element at the first index
  var firstElement = keys[0];
  //create a variable assigned to the value of the key-value pair
  var val = this.storage[firstElement];

  //delete the key-value with that element
  delete this.storage[firstElement];
  return val;

};




