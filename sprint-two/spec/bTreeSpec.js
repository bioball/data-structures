describe("bTree", function(){

  var bTree;

  beforeEach(function(){
    bTree = makeBTree();
  });

  it("should be a thing", function(){
    expect(bTree).toEqual(jasmine.any(Object));
  });

  it("should have a left, middle, right, and parent property", function(){
    expect(bTree.left === undefined).toBe(false);
    expect(bTree.middle === undefined).toBe(false);
    expect(bTree.right === undefined).toBe(false);
    expect(bTree.parent === undefined).toBe(false);
    expect(bTree.values === undefined).toBe(false);
  });

  it("should have an addValue function", function(){
    expect(bTree.addValue).toEqual(jasmine.any(Function));
  });

});