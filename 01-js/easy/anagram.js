/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let map1 = {};
  let map2 = {};

  for(i = 0; i<(str1.length); i++){
    if(map1[str1[i]]){
      map1[str1[i]] += 1;
    }
    else{
      map1[str1[i]] = 1;
    }
  }
  for (i = 0; i < (str2.length); i++) {
    if (map2[str2[i]]) {
      map2[str2[i]] += 1;
    }
    else {
      map2[str2[i]] = 1;
    }
  }

  if(Object.keys(map1).length != Object.keys(map2).length){
    return false;
  }

  for(let key in map1){
    if(map1[key] != map2[key]){
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
