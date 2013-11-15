var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {
  add: function(val){
    this._storage = this._storage || {};
    this._storage[JSON.stringify(val)] = true;
  },
  contains: function(val){
    var s = JSON.stringify(val);
    if (this._storage[s]){
      return true;
    }
    return false;
  },
  remove: function(val){
    var s = JSON.stringify(val);
    if(this._storage[s])
      delete this._storage[val];
  }
};