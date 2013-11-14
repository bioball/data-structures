var Queue = function() {

  this._storage = {};
  this._nextUp = 0;

};

Queue.prototype = {
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

Queue.prototype.constructor = Queue;
