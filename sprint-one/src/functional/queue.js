var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextUp = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[nextUp] = value;
    nextUp++;
  };

  instance.dequeue = function(){
    if (nextUp > 0) {
      var result = storage[0];
      nextUp--;
      for (var i=0;i<nextUp;i++) {
        storage[i] = storage[i+1];
      }
      return result;
    } else {
      return;
    }
  };

  instance.size = function(){
    return nextUp;
  };

  return instance;
};
