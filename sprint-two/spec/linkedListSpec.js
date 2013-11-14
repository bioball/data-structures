describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should add a tail to the list", function(){
    linkedList.addToTail(42);
    expect(linkedList.contains(42).toBeTruthy);
  });

  it("should remove the head", function() {
    linkedList.addToTail(42);
    expect(linkedList.removeHead()).toEqual(42);
  });

  it("removeHead should return undefined if list is empty", function(){
    expect(linkedList.removeHead()).toEqual(undefined);
  });


});