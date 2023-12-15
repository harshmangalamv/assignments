/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let sz = str.length;
  str = str.toUpperCase();
  let str_ = ""
  for(let i = 0; i<sz; i++){
    if(str[i]>='A' && str[i]<='Z'){
      str_ += str[i];
    }
  }
  
  str = str_;
  sz = str.length;
  for(let i=0; i<sz/2; i++){
    if(str[i] != str[sz-1-i]) return false;
  }

  return true;
}

module.exports = isPalindrome;
