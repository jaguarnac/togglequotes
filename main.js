(function(){
  'use strict';

  function toggleQuotes(inputStr){
    inputStr = inputStr.replace(/'/g, '__todblqt__');
    inputStr = inputStr.replace(/"/g, '__tosglqt__');
    inputStr = inputStr.replace(/__todblqt__/g, '"');
    inputStr = inputStr.replace(/__tosglqt__/g, '\'');
    return inputStr;
  }

  module.exports = {
    toggleQuotes: toggleQuotes
  };

})();
