var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //goal: add the value with the correct key to the storage

    //get the array of keys
    var storageKeys = Object.keys(storage);
    //find the value of the first element which becomes the name of the current key
    var currentKey = storageKeys[0];
    //create the object key from (currentKey + 1) and a value of the argument value
    storage[currentKey + 1] = value;
  };

  someInstance.dequeue = function() {
    //goal: remove the first property in the object (first in first out)

    //get the array of keys
    var keys = Object.keys(storage); //[1, 2, 3]
    //get the value of the first element of the array of keys
    var firstKey = keys[0]; //1
    //save the value of the first key in a variable
    var firstValue = storage[firstKey]; //a

    //delete the key-value property with the name of the first element from array of keys
    delete storage[firstKey]; //storage[1]
    return firstValue;
  };

  someInstance.size = function() {
    //get the array of keys
    var keys = Object.keys(storage);
    //get the length of the array of keys
    var keysLength = keys.length;

    //return the length
    return keysLength;
  };

  return someInstance;
};
