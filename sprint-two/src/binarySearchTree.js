var makeBinarySearchTree = function(){
  var tree = {};
  tree.depths = {};
  tree.insert = function(val){

    var
      head         = this.head,
      nodeToInsert = makeNode(val);
      count        = 0;

    var recursiveInsert = function(subNode){
      count++;
      if (val === subNode.value){
        return;
      }
      if (val < subNode.value){
        if (subNode.left){
          recursiveInsert(subNode.left);
        } else {
          subNode.left = nodeToInsert;
        }
      }
      if (val > subNode.value){
        if (subNode.right){
          recursiveInsert(subNode.right);
        } else {
          subNode.right = nodeToInsert;
        }
      }
    };
    if(!head){
      this.head = nodeToInsert;
    } else {
      recursiveInsert(head);
    }
    return nodeToInsert;
  };

  tree.closestNode = function(target){
    if (target === node.value){
      return node;
    }
    if (target > node.value){
      recurseNode(node.right);
    }
    if(target < node.value){
      recurseNode(node.left);
    }
    if(!node.left && !node.right){
      return node;
    }
  };

  tree.contains = function(target){
    var isThere = false;
    function recurse(node) {
      if (node.value === target) {
        isThere = true;
      } else {
        if (node.right)
          recurse(node.right);
        if(node.left)
          recurse(node.left);
      }

    }
    recurse(this.head);
    return isThere;

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
    node.value = val;
    node.left = null;
    node.right = null;
    return node;
  };

  tree.rebalance = function(){
    values = [];
    this.depthFirstLog(function(value){
      values.push(value);
    });
    values.sort(function(a, b) {
      if (a>b)
        return 1;
      if (a<b)
        return -1;
      return 0;
    });
    var newTree = makeBinarySearchTree();
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


//queue class copied from that awesome bioball guy

var makeQueue = function(){
  var
    instance = {},
    size     = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size += 1;
    instance[size] = value;
  };

  instance.dequeue = function(){
    var dequeued = instance[1];
    for(var i = 2; i < size+1; i++){
      var item = instance[i];
      instance[i-1] = item;
    }
    instance[size] = undefined;
    if(size > 0){
      size -= 1;
    }
    return dequeued;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
