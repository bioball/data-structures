var makeT9Tree = function() {
  var t9 = Object.create(t9Methods);
  t9.head = t9.makeNode("");

  t9._letters = {
    "a":2, "b":2, "c":2,
    "d":3, "e":3, "f":3,
    "g":4, "h":4, "i":4,
    "j":5, "k":5, "l":5,
    "m":6, "n":6, "o":6,
    "p":7, "q":7, "r":7, "s":7,
    "t":8, "u":8, "v":8,
    "w":9, "x":9, "y":9, "z": 9
  };

  return t9;
};

var t9Methods = {
  type: function(input) {
    return;
  },
  encode: function(word) {
    var result = [];
    for (var i=0;i<word.length;i++) {
      result.push(this._letters[word[i]]);
    }
    return result;
  },
  insert: function(actualWord){
    var self = this;
    var encodedWord = this.encode(actualWord);
    var recursiveInsert = function(node, remainingWord){
      var num = remainingWord[0];
      if(remainingWord.length){
        var child, i, subNumbers = [];

        for(i = 0; i < node.children.length; i++) {
          subNumbers.push(node.children[i].value);
        }

        if(subNumbers.indexOf(num) === -1){
          child = self.makeNode(num);
          node.children.push(child);
        } else {
          for(i = 0; i < node.children.length; i++){
            if(node.children[i].value === child){
              child = node.children[i];
            }
          }
        }

        recursiveInsert(child, remainingWord.slice(1));
      } else {
        node.words.push(actualWord);
      }
    };
    recursiveInsert(this.head, encodedWord);
  },
  makeNode: function(val){
    var node = {};
    node.value = val; //number
    node.children = []; //array of nodes
    node.words = []; //array of words
    return node;
  }

};