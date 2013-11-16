var makeBinarySearchTree = function(){
  var tree = {};

  tree.insert = function(val){
    var nodeToInsert = tree.makeNode(val);
    if(!this.head){
      this.head = nodeToInsert;
    } else {
      var endNode = this.findClosest(val);
      if (endNode.value === val) { 
        return; 
      }
      (endNode.value > val) ? endNode.left  = nodeToInsert
                            : endNode.right = nodeToInsert;
    }
    return nodeToInsert;
  };

  tree.contains = function(target){
    return target === this.findClosest(target).value;
  };

  tree.findClosest = function(target, node){
    node = node || this.head;
    if(node.value === target || (!node.right && !node.left)){
      return node;
    }
    if(node.value < target){
      return node.right ? this.findClosest(target, node.right) : node;
    }
    if(node.value > target){
      return node.left ? this.findClosest(target, node.left) : node;
    }
  };

  tree.depthFirstLog = function(callback){
    var recursiveInvoke = function(node){
      callback(node.value);
      if (node.left){
        recursiveInvoke(node.left);
      }
      if (node.right){
        recursiveInvoke(node.right);
      }
    };
    recursiveInvoke(this.head);
  };

  tree.inOrderLog = function(callback){
    var recursiveInvoke = function(node){
      if (node.left){
        recursiveInvoke(node.left);
      }
      callback(node.value);
      if (node.right){
        recursiveInvoke(node.right);
      }
    };
    recursiveInvoke(this.head);
  };

  tree.breadthFirstLog = function(cb) {
    var queue = makeQueue();
    var dequeued = this.head;
    while (dequeued) {
      cb(dequeued.value);
      if (dequeued.left) {
        queue.enqueue(dequeued.left);
      }
      if (dequeued.right) {
        queue.enqueue(dequeued.right);
      }
      dequeued = queue.dequeue();
    }
  };

  tree.makeNode = function(val){
    return {
      value: val,
      left: null,
      right: null
    };
  };

  tree.rebalance = function(){
    var
      values  = [],
      newTree = makeBinarySearchTree();

    this.inOrderLog(function(value){
      values.push(value);
    });

    var recursiveBalance = function(array){
      if(array.length !== 0){
        var
          indexOfMedian = Math.floor(array.length/2),
          median        = array[indexOfMedian],
          leftArray     = array.slice(0,indexOfMedian),
          rightArray    = array.slice(indexOfMedian+1);

        newTree.insert(median);
        recursiveBalance(leftArray);
        recursiveBalance(rightArray);

      }
    };

    recursiveBalance(values);
    tree.head = newTree.head;
  };

  return tree;
};