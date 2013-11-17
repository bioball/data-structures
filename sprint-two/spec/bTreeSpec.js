describe("bTree", function(){

  var bTree;

  beforeEach(function(){
    bTree = makeBTree();
  });

  it("should be a thing", function(){
    expect(bTree).toEqual(jasmine.any(Object));
  });

  it("should have a left, middle, right, and parent property", function(){
    bTree.insert(10);
    expect(bTree.root.left   === undefined).toBe(false);
    expect(bTree.root.middle === undefined).toBe(false);
    expect(bTree.root.right  === undefined).toBe(false);
    expect(bTree.root.parent === undefined).toBe(false);
    expect(bTree.root.values === undefined).toBe(false);
  });

  it("should have an insert function", function(){
    expect(bTree.insert).toEqual(jasmine.any(Function));
  });

  it("should have a basic insert pattern", function(){
    bTree.insert(9);
    bTree.insert(5);
    bTree.insert(17);
    expect(bTree.root.values).toEqual([9, 17]);
    expect(bTree.root.left.values).toEqual([5]);
  });

  it("should resplit a node if it has been saturated and a new value needs to be inserted", function(){
    bTree.insert(15);
    bTree.insert(30);
    bTree.insert(20);
    expect(bTree.root.values).toEqual([20]);
  });

  it("should handle a more complicated case", function(){
    bTree.insert(1);
    bTree.insert(2);
    bTree.insert(3);
    bTree.insert(4);
    bTree.insert(5);
    bTree.insert(6);
    bTree.insert(7);
    expect(bTree.root.values).toEqual([4]);
  });

});