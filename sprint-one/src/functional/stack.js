var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //check the length of someValue
    var storageKeys = Object.keys(storage);
    var storageLength = storageKeys.length;
    //assign key to be the length + 1 and the value to be someValue
    storage[storageLength + 1] = value;
    //storage[key] = someValue
  };

  someInstance.pop = function() {
    //get an array of keys
    var storageKeys = Object.keys(storage);
    //get the lengh of the array of keys
    var storageLength = storageKeys.length;
    //create a variable for the value of the last property
    var lastItem = storage[storageLength];
    //delete the last property
    delete storage[storageLength];
    //return the value of the last property
    return lastItem;


  };

  someInstance.size = function() {
    //get the length of the instance keys
    var keys = Object.keys(storage);
    //return the value of that length
    return keys.length;
  };

  return someInstance;
};
