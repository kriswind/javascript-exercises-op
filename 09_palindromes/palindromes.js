const palindromes = function (old_word = "") {
  old_word = old_word.toLowerCase().replace(/[^a-z0-9]/g, '');
  var new_word = "";
  for (var i = 0; i < old_word.length; i++) {
    new_word += old_word[old_word.length - i - 1];
  }


  if (new_word == old_word) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
