var Tree = function(value) {
  var newTree = {};


  // your code here
  //creates a new object instance that contains .value and treeMethods
  var instance = _.extend(newTree, treeMethods);
  //the new object will contain a children array that contains another object instance
  instance.children = [];
  instance.value = value;


  return instance;
};

var treeMethods = {};

//goal: add the value passed into addChild into newTree.children
treeMethods.addChild = function(value) {
  //push into children a new Tree object that contains value
  this.children.push(Tree(value));
};

//determine if entire tree contains target (recursion)
treeMethods.contains = function(target) {

  //base
  //if this.value === target
  if (this.value === target) {
    return true;
  }

  if (this.children.length !== 0) {
    var result = false;
    for (var i = 0; i <= this.children.length - 1; i++) {
      console.log('child obj: ', this.children[i]);
      result = this.children[i].contains(target);
      if (result === true) {
        return true;
      }
    }
    return result;
  }

  return false;



};



/*
 * Complexity: What is the time complexity of the above functions?
 */
