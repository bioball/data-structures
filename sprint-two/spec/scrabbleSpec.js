describe("scrabble", function() {
  var scrabble;

  beforeEach(function() {
    scrabble = makeScrabble();
  });

  it("should be a thing", function() {
    expect(scrabble).toEqual(jasmine.any(Object));
  });

  it("should have its methods and properties", function() {
    expect(scrabble.makeNode).toEqual(jasmine.any(Function));
    expect(scrabble.buildTree).toEqual(jasmine.any(Function));
    expect(scrabble.retrieveWords).toEqual(jasmine.any(Function));
    expect(scrabble.checkWords).toEqual(jasmine.any(Function));
    expect(scrabble.letters).toEqual(jasmine.any(Object));
    expect(scrabble.head).toEqual(jasmine.any(Object));
  });

  it("should construct a tree from a dictionary of words", function() {
    scrabble.buildTree(['apple', 'bike', 'jog']);
  });
});