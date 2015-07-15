(function(){
  'use strict';
  var tq = require('./main.js');
  var input = 'this is \'single quote\', this is "double quote"';
  var expected = 'this is "single quote", this is \'double quote\'';
  var output = tq.toggleQuotes(input);
  if (output === expected){
    console.log('All is well');
  } else {
    console.log('Expected Output:', expected);
    console.log('Actual Output:', output);
  }
})();
