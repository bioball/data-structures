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

  describe("insert", function(){
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
      expect(bTree.root.middle.values).toEqual([6]);
      expect(bTree.root.middle.middle.values).toEqual([7]);
      expect(bTree.root.left.values).toEqual([2]);
      expect(bTree.root.left.left.values).toEqual([1]);
    });

    it("should throw an error if nothing is passed in for removal", function(){
      expect(function() { bTree.insert() }).toThrow(new Error("need a numeric argument"));
    })
  });

  it("should be able to traverse down and accept a callback", function(){
    bTree.insert(1);
    bTree.insert(2);
    bTree.insert(3);
    bTree.insert(4);
    bTree.insert(5);
    bTree.insert(6);
    bTree.insert(7);
    var values = [];
    bTree.traverse(function(node){
      for (var i = 0; i < node.values.length; i++) {
        values.push(node.values[i]);
      }
    });
    expect(values.indexOf(5) > -1).toBe(true);
    expect(values.indexOf(2) > -1).toBe(true);
    expect(values.indexOf(6) > -1).toBe(true);
  });

  describe("removal", function(){
    it("should be able to remove a value", function(){
      bTree.insert(1);
      bTree.insert(2);
      bTree.insert(3);
      bTree.insert(4);
      bTree.insert(5);
      bTree.insert(6);
      bTree.insert(7);
      bTree.remove(4);
      var values = [];
      bTree.traverse(function(node){
        for (var i = 0; i < node.values.length; i++) {
          values.push(node.values[i]);
        }
      });
      expect(values.indexOf(4) === -1).toBe(true);
      expect(bTree.root.values).toEqual([2,5]);
      expect(bTree.root.middle.values).toEqual([3]);
      expect(bTree.root.right.values).toEqual([6,7]);
    });

    it("should throw an error if nothing is passed in for removal", function(){
      expect(function() { bTree.remove() }).toThrow(new Error("need a numeric argument"));
    });
  });

  it("should be able to return an array of all of its values", function(){
    bTree.insert(1);
    bTree.insert(2);
    bTree.insert(3);
    bTree.insert(4);
    bTree.insert(5);
    bTree.insert(6);
    bTree.insert(7);
    expect(bTree.allValues()).toEqual([1,2,3,4,5,6,7]);
  });

});
