var makeScrabble = function() {

  //REMEMBER TO DEAL WITH UPPERCASE/LOWERCASE LETTERS

  var scrabble = Object.create(scrabbleMethods);

  scrabble.head = scrabble.makeNode('');
  scrabble.letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
                      'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  return scrabble;
};

var scrabbleMethods = {
  buildTree: function(dictionary) {
    var self = this;
    function recurse(node) {
      for (var i=0;i<self.letters.length;i++) {
        var words = self.checkWords(node.value+self.letters[i], dictionary);
        if (words) {
          var newChild = self.makeNode(node.value+self.letters[i]);
          newChild.words = words;
          node.children.push(newChild);
          recurse(newChild);
        }
      }
    }
    recurse(this.head);
  },
  checkWords: function(targetString, dictionary) {
    var results;

    for (var i=0;i<dictionary.length;i++) {
      if (targetString === dictionary[i].slice(0,targetString.length) && results === undefined)
        results = [];
      if (dictionary[i] === targetString)
        results.push(targetString);
    }

    return results;
    //checks the dictionary against the string, returns false if the substring is not in any words
    //returns an empty array if it is a substr of some words but has no direct matches
    //returns an array of words if there are matches in the dictionary
  },
  retrieveWords: function(string) {
    //traverses down to find it's node and returns the array
  },
  makeNode: function(val) {
    result = {};
    result.value = val;
    result.children = [];
    result.words = [];
    return result;
    //val is the letters attributed by the current add and the nodes above it.
  }
};