class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}; //{1: a, 2: b}
    this.top = 0; //, 2
    this.stackSize = 0;
    this.bottom = 0; //1
  }

  size() {
    return this.stackSize;
  }

  enqueue(string) {
    this.top++;
    this.stackSize++;

    this.storage[this.top] = string;
  }

  dequeue() {

    if (this.stackSize === 0) {
      return;
    }

    this.bottom++;
    var savedValue = this.storage[this.bottom]; //a

    delete this.storage[this.bottom];
    this.stackSize--; //a


    return savedValue;
  }

}


