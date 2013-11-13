var makeStack = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = stackMethods.push;

  instance.pop = stackMethods.pop;

  instance.size = stackMethods.size;

  return instance;
};

var stackMethods = {
	push:function(value){
      this.storage[this.length] = value;
      this.length++;
    },
    pop:function() {
      if (this.length > 0) {
        var result = this.storage[this.length-1];
        delete this.storage[this.length-1];
        this.length--;
        return result;
      }
    },
    size:function() {
    	return this.length;
    }

};
