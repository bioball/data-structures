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
    };
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
