describe("scrabble", function() {
  var scrabble;

  beforeEach(function() {
    scrabble = makeScrabble();
  });

  it("should be a thing", function() {
    expect(scrabble).toEqual(jasmine.any(Object));
  });
});