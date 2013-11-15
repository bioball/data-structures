var makeTree = function(val){
  var newTree = {};
  newTree.value = val;
  newTree.children = null;
  newTree.parent = null;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  newTree.traverse = treeMethods.traverse;

  return newTree;
};

var treeMethods = {
  addChild: function(val){
    var child = makeTree(val);
    this.children = this.children || [];
    this.children.push(child);
    child.parent = this;
    return child;
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
  },
  removeFromParent: function(){
    var parent = this.parent;
    this.parent = null;
    for(var i = 0; i < parent.children.length; i++){
      if (parent.children[i] === this)
        parent.children.splice(i,1);
    }
  },
  traverse: function(cb){
    function recursiveInvoke(node){
      node.value = cb(node.value);
      if(node.children){
        for(var i = 0; i < node.children.length; i++){
          recursiveInvoke(node.children[i]);
        }
      }
    }
    recursiveInvoke(this);
  }
};