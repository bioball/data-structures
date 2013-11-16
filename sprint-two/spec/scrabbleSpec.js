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

  it("should construct an optimization tree from a dictionary of words", function() {
    scrabble.buildTree(['apple', 'bike', 'jog']);
  });

  it("should compare the permuations of a string against a dictionary and return the results", function() {
    expect(scrabble.findWords('hirac', ['table', 'chair', 'hiya', 'impeccable'])).toEqual(['chair']);
  });
});