class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  }

  size() {
    var keys = Object.keys(this);

    return keys.length;
  }

  enqueue(string) {
    //get array of keys
    var keys = Object.keys(this);
    //get the last element
    var lastElement = keys[keys.length - 1];
    //create an object key with that (element + 1) and a value of string
    this[lastElement + 1] = string;

    //return length of array of keys
    return keys.length;
  }

  dequeue() {
    //get array of keys
    var keys = Object.keys(this);
    //get first element
    var firstElement = keys[0];
    //save the value of the key that matches the first element
    var value = this[firstElement];
    //delete the key that matches the first element
    delete this[firstElement];
    //return the saved valu
    return value;
  }

}

var Final = new Queue();
