var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //if the set.storage[item] is undefined
  if (this.storage[item] === undefined) {
    this.storage[item] = 1;
  } else if (this.storage[item] !== undefined) {
    this.storage[item]++;
  }
  //then add a key of item with a value of 1
  //if the set.storage[item] is already defined
  //add 1 to the value
};

setPrototype.contains = function(item) {
  //if the key that matches item is not undefined
  if (this.storage[item] !== undefined) {
    return true;
  } else {
    return false;
  }
  //return true
  //else
  //return false
};

setPrototype.remove = function(item) {
  //delete the key matches item
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
