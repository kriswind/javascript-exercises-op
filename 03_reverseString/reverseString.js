const reverseString = function(user_string) {
  var return_string = ""
  for (var i = 0; i < user_string.length; i++) {
    return_string += user_string[user_string.length - 1 - i] 
  }
  return return_string
};

// Do not edit below this line
module.exports = reverseString;
