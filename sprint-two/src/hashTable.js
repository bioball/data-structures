var HashTable = function(){
  this._limit = 8;
  this._indices = {};

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
  this._indices[i] = true;

  if(!Array.isArray(this._storage.get(i))){
    this._storage.set(i, []);
  }
  var values = this._storage.get(i);
  values.push([k, v]);
  this._storage.set(i, values);

  if (this.countKeys() >= this._limit*0.75)
  this.rehash(this._limit*2);
  //if key already exists at index, this._limit++;
  //this._storage.set(this._limit++, v);
};

HashTable.prototype.rehash = function(limit) {
  var newStorage = makeLimitedArray(limit);
  var newIndices = {};
  for (var index in this._indices) {
    var tuples = this._storage.get(parseInt(index, 10));
    for (var i=0;i<tuples.length;i++) {
      var newIndex = getIndexBelowMaxForKey(tuples[i][0], limit);
      if(!Array.isArray(newStorage.get(newIndex))){ //
        newStorage.set(newIndex, []); //
      } //
      newIndices[newIndex] = true;
      var values = newStorage.get(newIndex); //
      values.push([tuples[i][0], tuples[i][1]]); //
      newStorage.set(newIndex, values); //
    }
  }

  this._indices = newIndices;
  this._storage = newStorage;
  this._limit = limit; //
};

HashTable.prototype.countKeys = function(){
  var count = 0;
  for (var index in this._indices){
    if(this._indices[index])
      count++;
  }
  return count;
};

HashTable.prototype.retrieve = function(k){
  var values = this._storage.get(getIndexBelowMaxForKey(k, this._limit));
  if(values){
    for(var i = 0; i < values.length; i++){
      if (values[i][0] === k){
        return values[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var hashIndex = getIndexBelowMaxForKey(k, this._limit);
  var values = this._storage.get(hashIndex);
  var result;
  for (var i=0;i<values.length;i++) {
    if (values[i][0] === k) {
      result = values[i][1];
      values.splice(i,1);

      delete this._indices[hashIndex];
      if(this.countKeys() <= this._limit*0.25){
        this.rehash(this._limit/2);
      }

      return result;
    }
  }

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
