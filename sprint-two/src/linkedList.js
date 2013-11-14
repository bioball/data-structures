// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    if(!list.tail){
      list.tail = list.head = makeNode(val);
    } else {
      list.tail.next = makeNode(val);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      var removed = list.head.value;
      list.head = list.head.next;
      return removed;
    }
  };

  list.contains = function(val){
    var listHead = this.head;
    var checkForVal = function(node){
      if(node.value === val){
        return true;
      }
      if(node.next){
        checkForVal(node.next);
      }
      return false;
    }
    return checkForVal(listHead);
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
