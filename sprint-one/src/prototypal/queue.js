

var makeQueue = function(){
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.nextUp = 0;

  // Implement the methods below


  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.nextUp] = value;
    this.nextUp++;
  },
  dequeue: function(){
	if (this.nextUp > 0) {
      var result = this.storage[0];
      this.nextUp--;
      for (var i=0;i<this.nextUp;i++) {
        this.storage[i] = this.storage[i+1];
      }
      return result;
    } else {
      return;
    }
  },
  size: function(){
  	return this.nextUp;
  }
};
