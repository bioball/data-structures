// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    list.tail.next = makeNode(val);
  };

  list.removeHead = function(){
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(val, node){
    if(node.value === val){
      return true;
    }
    if(node.next !== null){
      list.contains(val, node.next);
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
