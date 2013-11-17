var makeBinarySearchTree = function(){
  var tree = {};
  var count = {
    max: 0,
    min: 2
  };

  tree.insert = function(val){
    var nodeToInsert = tree.makeNode(val);
    if(!this.head){
      this.head = nodeToInsert;
    } else {
      var endNode = this.findClosest(val);
      recursiveCounter = 0;
      if (endNode.value === val) { 
        return; 
      }
      (endNode.value > val) ? endNode.left  = nodeToInsert
                            : endNode.right = nodeToInsert;
    }
    count.max++;
    if(count.max >= count.min*2){

    }
    return nodeToInsert;
  };

  tree.contains = function(target){
    return target === this.findClosest(target).value;
  };

  tree.findClosest = function(target, node){
    var depthCount = 0;
    var recursiveFinder = function(target, node){
      depthCount++;
      if(node.value === target || (!node.right && !node.left)){
        return node;
      }
      if(node.value < target){
        return node.right ? recursiveFinder(target, node.right) : node;
      }
      if(node.value > target){
        return node.left ? recursiveFinder(target, node.left) : node;
      }
    };
    var closest = recursiveFinder(target, this.head);
    if(depthCount >= count.min * 2){
      var counts = this.findDepths();
      count.max = counts[1];
      count.min = Math.floor(Math.log(counts[0]));
      if (depthCount >= count.min){
        this.rebalance();
      }
    }
    return closest;
  };

  tree.findDepths = function(){
    var numberOfNodes = 0;
    var mins = [];
    this.breadthFirstLog(function(node){
      if (!node.left || !node.right){
        mins.push(numberOfNodes);
      }
      numberOfNodes++;
    });
    return [mins[0], numberOfNodes];
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
      cb(dequeued);
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