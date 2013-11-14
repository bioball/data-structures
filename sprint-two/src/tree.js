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
    function recurse(nodes) {
      for (var i=0;i<nodes.children;i++) {
        if (nodes.children[i] === target)
          isThere = true;
        if (nodes.children[i].children)
          recurse(nodes);
      }
    }
    recurse(this.children, target);
    return isThere;
  }
};