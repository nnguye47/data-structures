class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  }

  size() {
    //get array of keys
    var keys = Object.keys(this);
    //return length of the array
    return keys.length;
  }

  push(string) {
    //get array of keys
    var keys = Object.keys(this);
    //get the last element in the array
    var lastElement = keys[keys.length - 1];

    //create a key with (last element + 1) and a value of string
    this[lastElement + 1] = string;
    //return array length
    return keys.length;
  }

  pop() {
    //get array of keys
    var keys = Object.keys(this);
    //get the last element in the array
    var lastElement = keys[keys.length - 1];
    //save the value of the key that matches the last element from the array
    var value = this[lastElement];
    //delete that key-value pair
    delete this[lastElement];
    //return saved value
    return value;
  }

}

var Final = new Stack();
