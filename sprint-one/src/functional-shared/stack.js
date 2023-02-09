var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  var storage = {};
  //new instance will be the "this" we refer to
  var newInstance = _.extend(instance, stackMethods);
  newInstance['storage'] = storage;

  // var storageKeys = Object.keys(storage);
  // //get the length of storage
  // instance.length = storageKeys.length;
  // //get the value of the key
  // var keyValue = storageKeys[storageKeys.length];
  // //function that adds the key-value pair to storage
  // newInstance.add = function(value) {
  //   storage[keyValue] = value;
  // };

  return newInstance;
};

var stackMethods = {

};

//create the methods for stackMethods
//get them into stackmethods

stackMethods.size = function() {
  //return the length this --- this is whatever is left of the dot at the time of call
  console.log('this: ', this);

  var instanceKeys = Object.keys(this.storage);

  return instanceKeys.length;
};

stackMethods.push = function(value) {
  var instanceKeys = Object.keys(this.storage);
  //get the value of the latest key
  var latestKey = instanceKeys[instanceKeys.length - 1];

  //new key is the latest key + 1
  //and value is whatever is passed as an argument
  this.storage[latestKey + 1] = value;

  //return the length once the value is added to the end of the stack
  return this.length;
};

stackMethods.pop = function() {
  //get the array of keys
  var instanceKeys = Object.keys(this.storage);

  //get the value of the last element in array of keys
  var latestKey = instanceKeys[instanceKeys.length - 1];
  //this value is the key in the key-value pair in the object
  //save the value of the wanted key-value pair


  //deleter the key-value pair
  //return the value of the key-value pair
};


