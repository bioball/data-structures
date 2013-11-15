var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {
  add: function(val){
    this._storage = this._storage || {};
    this._storage[val] = true;
  },
  contains: function(val){
    if (this._storage[val]){
      return true;
    }
    return false;
  },
  remove: function(val){
    if(this._storage[val])
      delete this._storage[val];
  }
};