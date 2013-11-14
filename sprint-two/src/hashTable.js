var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // _storage.set(i, v);
  if(!Array.isArray(this._storage.get(i))){
    this._storage.set(i, []);
  }
  var values = this._storage.get(i);
  values.push([k, v]);
  this._storage.set(i, values);
  //if key already exists at index, this._limit++;
  //this._storage.set(this._limit++, v);
};

HashTable.prototype.retrieve = function(k){
  var values = this._storage.get(getIndexBelowMaxForKey(k, this._limit));
  for(var i = 0; i < values.length; i++){
    if (values[i][0] === k){
      return values[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var values = this._storage.get(getIndexBelowMaxForKey(k, this._limit));
  var result;
  for (var i=0;i<values.length;i++) {
    if (values[i][0] === k) {
      result = values[i][1];
      values.splice(i,1);
      return result;
    }
  }

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
