describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("add should add a value to the set", function(){
  	set.add(4);
  	set.add(5);
  	set.add(6);
  	var values = [];
  	for(var key in set._storage){
  		values.push(key);
  	}
  	expect(set.contains(4)).toBe(true);
  	expect(values).toEqual(['4','5','6']);
  });

  it("should remove values from the set", function() {
  	set.add(4);
  	set.remove(4);
  	expect(set.contains(4)).toBe(false);
  })
});