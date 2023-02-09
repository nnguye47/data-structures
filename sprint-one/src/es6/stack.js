class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return this.top;
  }

  push(string) {
    this.top++;

    this.storage[this.top] = string;
  }

  pop() {
    if (this.top === 0) {
      return;
    }

    //save the value of the key that is to be deleted
    var savedValue = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return savedValue;
  }

}


