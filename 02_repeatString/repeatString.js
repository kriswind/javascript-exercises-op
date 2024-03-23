const repeatString = function(user_string, user_number) {
  var return_string = ""
  if (user_number < 0) return "ERROR"
  for(var i = 0; i < user_number; i++) {
    return_string += user_string
  }; 
  return return_string
};

// Do not edit below this line
module.exports = repeatString;
