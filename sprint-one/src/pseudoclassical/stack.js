var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
};

Stack.prototype.size = function() {
  //return top which keeps track of our size
  return this.top;
};

Stack.prototype.push = function(string) {
  //add one to top in our object
  this.top++;

  //create a key value pair with key = top and value = string
  this.storage[this.top] = string;
};

Stack.prototype.pop = function() {
  //if top is  0 do not pop
  if (this.top === 0) {
    return;
  }
  //save the value of top
  var value = this.storage[this.top];

  //delete the last property in the object
  delete this.storage[this.top];
  //remove one from top
  this.top--;
  //return the saved value
  return value;
};






