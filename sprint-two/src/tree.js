var makeTree = function(val){
  var newTree = {};
  newTree.value = val;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {
  addChild: function(val){
    this.children = this.children || [];
    this.children.push(makeTree(val));
  },
  contains: function(target){
    var isThere = false;
    function recurse(node) {
      if(node.value === target){
        isThere = true;
      }
      if (node.children) {
        for (var i=0;i<node.children.length;i++) {
          recurse(node.children[i]);
        }
      }
    }
    recurse(this);
    return isThere;
  }
};