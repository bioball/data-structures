describe("T9", function(){
  var T9;

  beforeEach(function(){
    T9 = makeT9Tree();
  });

  it("T9 should be a thing", function(){
    expect(T9).toEqual(jasmine.any(Object));
  });

  it("T9 should have a type function", function(){
    expect(T9.type).toEqual(jasmine.any(Function));
  });

  it("Should encode words into T9 number notation.", function() {
    expect(T9.encode("bike")).toEqual("2453");
  });
});