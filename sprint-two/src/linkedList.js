// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    if(!list.tail){
      list.tail = list.head = makeNode(val);
    } else {
      var prev = list.tail;
      list.tail.next = makeNode(val);
      list.tail = list.tail.next;
      list.tail.previous = prev;
    }
  };

  list.removeTail = function() {
    if (list.tail) {
      var removed = list.tail.value;
      if (list.tail === list.head)
        list.head = null;
      list.tail = list.tail.previous;
      if (list.tail)
        list.tail.next = null;
      return removed;
    }
  };

  list.addToHead = function(val){
    if(!list.head){
      list.head = list.tail = makeNode(val);
    } else {
      var prevHead = list.head;
      list.head = makeNode(val);
      list.head.next = prevHead;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      var removed = list.head.value;
      if (list.head === list.tail)
        list.tail = null;
      list.head = list.head.next;
      if (list.head)
        list.head.previous = null;
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
    };
    if (listHead)
      return checkForVal(listHead);
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
