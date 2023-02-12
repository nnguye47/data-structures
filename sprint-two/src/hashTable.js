

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);


  // //write a function that will push bucket into the storage at index
  // var addBuckets = function(value, index, storage) {
  //   value = [];
  //   this.storage.set(index, value);
  // };

  // this._storage.each(addBuckets);
};

HashTable.prototype.insert = function(k, v) { //k = key, v === value
  var index = getIndexBelowMaxForKey(k, this._limit);

  var currentBucket = this._storage.get(index);
  //create another limited array with a limit of 2 to make out tuples
  //assign tuple[0] the value k and tuple[1] a value of v

  //if currentBucket is undefined
  if (currentBucket === undefined) {
    //assign value of that index as bucket
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  } else {
    for (var i = 0; i < currentBucket.length; i++) {
      //if tuple key === k
      if (currentBucket[i][0] === k) {
        currentBucket[i][1] = v;
      } else {
        currentBucket.push([k, v]);
      }
        //set the tuple's value to v
      //if tuple key !== k
        //push tuple into array
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var currentBucket = this._storage.get(index);
  //iterate of the array located at index in this._storage
  for (var i = 0; i < currentBucket.length; i++) {
    //if the key matches k
    if (currentBucket[i][0] === k) {
      return currentBucket[i][1];
    }
      //return the value
        //return the value located at index 1;
  }

};



HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //delete the key that matches the index
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


