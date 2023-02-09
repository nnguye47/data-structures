var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function() {
  //get the array of keys
  var keys = Object.keys(this);
  //return the length of the array
  return keys.length;
};

Stack.prototype.push = function(string) {
  //get the array of keys
  var keys = Object.keys(this);
  //get the last index of the array
  var lastIndex = keys.length - 1;
  //get the element at the last index
  var lastElement = keys[lastIndex];
  //create an obect key using the last element with a value of string
  this[lastElement + 1] = string;

  //return length of the array of keys
  return keys.length;
};

Stack.prototype.pop = function() {
  //get the array of keys
  var keys = Object.keys(this);
  //get the last index of the array
  var lastIndex = keys.length - 1;
  //get the last element of the array
  var lastElement = keys[lastIndex];
  //create a variable save the value of the key that matches the last element of the array
  var value = this[lastElement];

  //delete the last property in the object
  delete this[lastElement];
  //return the saved value
  return value;
};


var Final = new Stack();



