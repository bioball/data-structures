describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should be able to insert and retrieve", function(){
    hashTable.insert("answer to meaning of life", 42);
    expect(hashTable.retrieve("answer to meaning of life")).toEqual(42);
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("should be able to remove a key value pair", function(){
    hashTable.insert("bob", "likes burgers");
    hashTable.insert("charles", "controls peoples minds");
    expect(hashTable.remove("bob")).toEqual("likes burgers");
    expect(hashTable.retrieve("bob")).toEqual(undefined);
  });

  it("should double in size as soon as 75% of the spaces have been filled", function() {
    hashTable.insert("hi", 42);
    hashTable.insert("hello", 42);
    hashTable.insert("yo", 42);
    hashTable.insert("foo", 42);
    hashTable.insert("bar", 42);
    hashTable.insert("ok", 42);
    hashTable.insert("next", 42);
    hashTable.insert("grownups", 20);
    hashTable.insert("programming", 42);
    hashTable.insert("YOLO", 41);
    expect(hashTable._limit).toEqual(16);
    expect(hashTable.retrieve("YOLO")).toEqual(41);
    expect(hashTable.retrieve("grownups")).toEqual(20);
  });

  it("should reduce size by half if the amount of spaces being used falls below 25%", function(){
    hashTable.insert("hi", 42);
    hashTable.remove("hi");
    expect(hashTable._limit).toEqual(4);
    expect(hashTable.countKeys()).toEqual(0);
  });
});