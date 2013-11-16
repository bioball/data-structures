describe("T9", function(){
  var T9;

  beforeEach(function(){
    T9 = makeT9Tree();
  });

  describe("it should have a type function", function(){
    expect(T9.type).toEqual(jasmine.any(Function));
  });
});