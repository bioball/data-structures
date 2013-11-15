describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should be able to add a child", function(){
    tree.addChild(15);
    tree.addChild(25);
    var childValues = [];
    for(var i = 0; i < tree.children.length; i++){
      childValues.push(tree.children[i].value);
    }
    expect(childValues).toEqual([15,25]);
  });

  it("contains should work", function() {
    tree.addChild(10);
    tree.addChild(26);
    tree.children[0].addChild(30);
    console.log(tree);
    expect(tree.contains(30)).toBe(true);
  });

  it("should have a parent property", function(){
    var child = tree.addChild("alice");
    expect(child.parent).toEqual(tree);
  });

  it("should be able to remove the tree from parent", function(){
    var child = tree.addChild(42);
    child.addChild(12);
    child.addChild("bob");
    child.removeFromParent();
    expect(tree.children[0]).toEqual(undefined);
    expect(child.parent).toEqual(null);

    
    var branchValues = [];
    for(var i = 0; i < child.children.length; i++){
      branchValues.push(child.children[i].value);
    }
    expect(branchValues).toEqual([12,"bob"]);
  });

  // Add more tests here to test the functionality of tree.
});