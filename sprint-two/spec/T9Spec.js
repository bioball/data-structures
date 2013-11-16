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
    expect(T9.encode("bike")).toEqual([2,4,5,3]);
  });

  it("should be able to insert an encoded word", function(){
    T9.insert('bike');
  });

  it("should be able to retrieve an array of words for an array of numbers", function() {
    T9.insert('bike');
    T9.insert('yolo');
    T9.insert('needsleep');
    T9.insert('zolo');
    expect(T9.type('9656')).toEqual(['yolo', 'zolo']);
  });
});