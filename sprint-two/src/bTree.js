//This constructor will return a b-tree of order 3

var makeBTree = function(){

  var newBTree = {};

      ////////////////////
      // CLASS FUNCTION //
      ////////////////////

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

      ////////////////////////
      // INSTANCE FUNCTIONS //
      ////////////////////////

  newBTree.insert = function(val){

    // if there is no root, the root simmply becomes the node. otherwise, find the closest
    // node and perform an addValue on it
    if (typeof val !== 'number' ){
      throw new Error('need a numeric argument')
    }
    if (!this.root) {
      this.root = newBTree.makeNode(val);
    } else {
      findClosest(val, this.root).addValue(val);
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

        var
          node        = this,
          grandParent = node.parent;

        // since the function is recursive, a node is made upon first invocation
        childNode = childNode || newBTree.makeNode(val);

        // if the length is less than two, we can guarantee that the first value is filled
        // and the second is empty
        if (node.values.length < 2) {

        // if our node's value is less than the first value of the node we're adding
        // to, attach it to node.left
          if (val < node.values[0]) {
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

            if (childNode.left) { childNode.left.parent = node; }
            if (childNode.middle) { childNode.middle.parent = node; }

          }

        }

        // if the node has been saturated, we will need to discard the node, and attach a new
        // node split along the median, and add the median to the parent node (which will split
        // yet again if that becomes saturated)
        else {

          var
            arr         = node.values.slice(0).concat(val).sort(function(a, b) {
                            return a - b;
                          }),
            median      = arr[1],
            newParent   = newBTree.makeNode(median),
            leftChild   = newBTree.makeNode(arr[0]),
            middleChild = childNode || newBTree.makeNode(arr[2]);

          if (node.left) { leftChild.left = node.left; }
          if (node.middle) { leftChild.middle = node.middle; }

          newParent.left     = leftChild;
          newParent.middle   = middleChild;
          leftChild.parent   = newParent;
          middleChild.parent = newParent;


        // if there is a "grandParent" node, then add the node we just created to the
        // "grandParent". otherwise, "newParent" becomes the top of the tree
          if (grandParent) {
            grandParent.addValue(median, newParent);
          } else {
            self.root = newParent;
          }
        }
      }
    };
  };

  newBTree.traverse = function(callback, node){
    node = node || this.root;
    callback(node);
    if(node.left){
      newBTree.traverse(callback, node.left);
    }
    if(node.middle){
      newBTree.traverse(callback, node.middle);
    }
    if(node.right){
      newBTree.traverse(callback, node.right);
    }
  };

  newBTree.remove = function(target){
    var i, indexOfTarget, allValues = this.allValues();

    if (typeof target !== 'number' ){
      throw new Error('need a numeric argument')
    }

    // if the target isn't in the allValues array, do nothing. otherwise reset the root
    // and reinsert all remaining values back into the tree in order
    indexOfTarget = allValues.indexOf(target);
    if(indexOfTarget < 0){ return; }

    this.root = null;
    allValues.splice(indexOfTarget, 1);
    for (i = 0; i < allValues.length; i++) {
      this.insert(allValues[i]);
    }
    return target;
  };

  newBTree.allValues = function(){
    var collection = [];
    this.traverse(function(node){
      for (var i = 0; i < node.values.length; i++) {
        collection.push(node.values[i]);
      }
    })
    return collection.sort(function(a, b){ return a - b; });
  }


  return newBTree;
};
