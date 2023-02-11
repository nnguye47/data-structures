

// Instantiate a new graph
var Graph = function() {
  this.storage = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create a key-value pair in storage
  //key = node and the value = node
  this.storage[node] = {}; //storage = {node: {}}
  this.storage[node][node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  console.log(this.storage[node]);
  //check for the key that equals node in the object
  //if key does not equal undefined
  if (this.storage[node] !== undefined) {
    return true;
  } else {
    return false;
  }
    //return true;
  //else
    //return undefined
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //delete the key that equals node
  delete this.storage[node];

  //for every key in storage (every node in the graph)
    //delete the key that matches the value of node
  for (var keys in this.storage) {
    delete this.storage[keys][node];
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if the vale at this.storage[fromNode] has a value of toNode
  console.log(this.storage[fromNode][toNode]);

  if (this.storage[fromNode][toNode] === toNode) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //goal: change the value of the from node to equal toNode
  var from = Number(fromNode);
  var to = Number(toNode);
  //add edge key with a value of toNode in this.storage[fromNode]
  this.storage[from][to] = to;
  this.storage[to][from] = from; //storage = {4: {5: 5}, 5: {4: 4}}

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //goal: remove the edge between the two nodes
  //navigate to the edge of fromNode and delete the key that equals toNode
  delete this.storage[fromNode][toNode];
  //navigate to the edge of the toNode and delete the key that equals fromNode
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var currentKey in this.storage) {
    //for every key in this.storage
    cb.call(this.storage, currentKey);
  }
};

//the cb function
//var connectToFive = function(item) {
  //graph.addEdge(item, 5);
//};
/*
 * Complexity: What is the time complexity of the above functions?
 */


