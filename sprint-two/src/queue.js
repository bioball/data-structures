var makeQueue = function(){
  var
    instance = {},
    size     = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size += 1;
    instance[size] = value;
  };

  instance.dequeue = function(){
    var dequeued = instance[1];
    for(var i = 2; i < size+1; i++){
      var item = instance[i];
      instance[i-1] = item;
    }
    instance[size] = undefined;
    if(size > 0){
      size -= 1;
    }
    return dequeued;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};