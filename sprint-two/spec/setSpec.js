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
    set.add("hello");
    set.add("bee");
    set.add("gees");
    expect(set.contains("hello")).toBe(true);
    expect(set.contains("bee")).toBe(true);
    expect(set.contains("gees")).toBe(true);
  });

  it("should remove values from the set", function() {
    set.add(4);
    set.remove(4);
    expect(set.contains(4)).toBe(false);
  });

  it("should accept multiple data types", function() {
    set.add([]);
    set.add({});
    set.add(null);
    set.add(42);
    set.add("Hello set world");
    expect(set.contains([])).toBe(true);
    expect(set.contains({})).toBe(true);
    expect(set.contains(null)).toBe(true);
    expect(set.contains(42)).toBe(true);
    expect(set.contains("Hello set world")).toBe(true);
  });
});