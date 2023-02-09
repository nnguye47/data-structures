var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0; //2, 3
  this.stackSize = 0;
  this.bottom = 0;

};


Queue.prototype.size = function() {
  //return top to get the size
  return this.stackSize;
};

Queue.prototype.enqueue = function(string) {
  //add one to top
  this.top++;
  this.stackSize++;
  //create a property with key = top and value = string
  this.storage[this.top] = string;
};

Queue.prototype.dequeue = function() {
  if (this.stackSize === 0) {
    return;
  }
  this.bottom++;
  //save the value of the first key-value pair
  var value = this.storage[this.bottom]; //string
  //delete the key value pair
  delete this.storage[this.bottom];

  this.stackSize--;
  //return the saved value
  return value;
};


