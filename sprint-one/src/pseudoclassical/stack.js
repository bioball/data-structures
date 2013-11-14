var Stack = function() {

  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0; // Hint: set an initial value here

};

Stack.prototype = {
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
    },
}

Stack.prototype.constructor = Stack;