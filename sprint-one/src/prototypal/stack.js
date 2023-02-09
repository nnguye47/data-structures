var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create an instance with Object.create(inputs)
  var instance = Object.create(stackMethods);
  //create a storage variable
  var container = {};
  //add storage variable to our instance
  instance.storage = container;

  //return the instance object
  console.log(instance);
  return instance;

};

var stackMethods = {};

stackMethods.size = function() {
  //get the array of keys
  var keys = Object.keys(this.storage);

  //return the length of the array of keys
  return keys.length;
};

stackMethods.push = function(string) {
  //get the array of keys
  var keys = Object.keys(this.storage);
  //get the index of the last element
  var lastIndex = keys.length - 1;
  //get the value of the last element in the array, this value is the key in the object
  var lastElement = keys[lastIndex];

  //create a key value pair in object
  //key === value of last element in array, value = string input
  this.storage[lastElement + 1] = string;

  //return the length of the array of keys
  return keys.length;
};

stackMethods.pop = function() {
  //get the array of keys
  var keys = Object.keys(this.storage);
  //get the index of the last element
  var lastIndex = keys.length - 1;
  //get the value of the last element
  var lastElement = keys[lastIndex];
  //save the value of the object with that element as the key
  var lastValue = this.storage[lastElement];

  //delete the key-value pair that matches the key
  delete this.storage[lastElement];
  //return the value of the key-value pair
  return lastValue;
};


