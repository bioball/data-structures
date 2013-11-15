var makeBinarySearchTree = function(){
  var tree = {};
  tree.insert = function(val){

    var
      head         = this.head,
      nodeToInsert = makeNode(val);

    var recursiveInsert = function(subNode){
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
  tree.contains = function(){};
  tree.depthFirstLog = function(){};
  tree.makeNode = function(val){
    node.value = val;
    node.left = null;
    node.right = null;
    return node;
  };
  tree.head = null;
  return tree;
};
