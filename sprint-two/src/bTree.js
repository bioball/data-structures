var makeBTree = function(){
  //This constructor will return a B-tree of order 3
  var newBTree = {};

  // class functions

  var findClosest = function(val, node){
    if (!node.left && !node.middle && !node.right) {
      return node;
    }
    else if (val < node.values[0]) {
      return node.left ? findClosest(val, node.left) : node;
    }
    else if (val > node.values[1]) {
      return node.right ? findClosest(val, node.right) : node;
    }
    else {
      return node.middle ? findClosest(val, node.middle) : node;
    }

  };

  // newBTree instance functions

  newBTree.insert = function(val){
    if(!this.root){
      this.root = newBTree.makeNode(val);
    } else {
      closestNode = findClosest(val, this.root);
      closestNode.addValue(val);
    }
  };

  newBTree.makeNode = function(val){
    var self = this;
    return {
      values  : [val],
      left    : null,
      middle  : null,
      right   : null,
      parent  : null,
      addValue: function(val, childNode){

        var node  = this;
        childNode = childNode || newBTree.makeNode(val);

        // if the length is less than two, we can guarantee that the first value is filled
        // and the second is empty
        if (node.values.length < 2) {

        // if our node's value is less than the first value of the node we're adding
        // to, attach it to node.left
          if(val < node.values[0]) {
            node.left        = childNode;
            childNode.parent = node;
          }

        // if our node's value is greater than the first value of the node we're adding
        // to, add our node's value to that array, and assign the middle and right properties
        // to our node's left and middle properties
          else {
            node.values      = node.values.concat(val);
            node.middle      = childNode.left;
            node.right       = childNode.middle;
            childNode.parent = node;
            if( childNode.left ){ childNode.left.parent = node; }
            if( childNode.middle ){ childNode.middle.parent = node; }
          }

        }

        // if the node has been saturated, we will need to discard the node, and attach a new
        // node split along the median, and add the median to the parent node (which will split
        // yet again if that becomes)
        else {

          var
            arr         = node.values.slice(0).concat(val).sort(function(a, b) {
                            return a - b;
                          }),
            median      = arr[1],
            newParent  = newBTree.makeNode(median),
            leftChild   = newBTree.makeNode(arr[0]),
            middleChild = newBTree.makeNode(arr[2]);

          if (node.left) { leftChild.left = node.left; }
          if (node.middle) { leftChild.middle = node.middle; }

          newParent.left    = leftChild;
          newParent.middle  = middleChild;
          leftChild.parent   = newParent;
          middleChild.parent = newParent;


        // if there is a grandParent node, then add the node we just created to the grandParent
        // if there is no grandParent, "parent" becomes the top of the tree
          if(node.parent){
            node.parent.addValue(median, newParent);
          } else {
            self.root = newParent;
          }
        }
      }
    };
  };
  return newBTree;
};