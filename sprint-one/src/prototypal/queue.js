

var makeQueue = function(){
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._nextUp = 0;

  // Implement the methods below


  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this._storage[this._nextUp] = value;
    this._nextUp++;
  },
  dequeue: function(){
  	if (this._nextUp > 0) {
      var result = this._storage[0];
      this._nextUp--;
      for (var i=0;i<this._nextUp;i++) {
        this._storage[i] = this._storage[i+1];
      }
      return result;
    }
  },
  size: function(){
  	return this._nextUp;
  }
};
