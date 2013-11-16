var makeBTree = function(val){
  //This constructor will return a B-tree of order 3
  var newBTree = {};
  newBTree.values = [val];
  newBTree.left = null;
  newBTree.middle = null;
  newBTree.right = null;
  newBTree.parent = null;

  newBTree.addValue = function(val){
    var parent = this.parent;
    if (this.values.length < 2) {
      val > this.values[0] ? this.values.push(val) : this.values.unshift(val);
    } else {
      var arr = this.values.slice(0);
      arr.push(val);
      arr.sort(function(a, b) { return a - b; });
      var
        leftChild = makeBTree(arr[0]),
        middleChild = makeBTree(arr[2]),
        newParent = makeBTree(arr[1]);

      newParent.left = leftChild;
      newParent.middle = middleChild;
    }

  };

  newBTree.findClosest = function(val, node){
    node = node || this;
    if(this.values.length < 2){
      return node;
    }
    if(!this.values.right && !this.values.middle && !this.values.left){
      return node;
    }
    if(this.values[0] > val){
      return findClosest(this.left, node);
    }
    if(this.values[0] < val && this.values[1] > val){
      return findClosest(this.middle, node);
    }
    if(this.values[1] > val){
      return findClosest(this.right, node);
    }
  };


  return newBTree;
};