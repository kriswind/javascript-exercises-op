// Very scuffed solution
const removeFromArray = function(user_array, user_remove, user_remove2, user_remove3, user_remove4) {
  result = user_array.filter((num) => (num !== user_remove) && (num !== user_remove2) && (num !== user_remove3) && (num !== user_remove4));
  return result
};
// Use rest parameters for i number of arguments

// Do not edit below this line
module.exports = removeFromArray;
