// add whatever parameters you deem necessary
// constructNote
// Write a function called constructNote, which accepts two strings,
//  a message and some letters.
//  The function should return true if the message can be built with the letters
//   that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(str1, str2) {
  if (str2.length < str1.length) return false;
  function freqCounter(str) {
    let obj = {};
    for (let letter of str) {
      obj[letter] = obj[letter] + 1 || 1;
    }
    return obj;
  }
  let str1Obj = freqCounter(str1);
  let str2Obj = freqCounter(str2);
  for (let key in str1Obj) {
    //   if less letters in string 2 than string 1 return false
    if (!str2Obj[key] || str2Obj[key] < str1Obj[key]) {
      return false;
    }
  }
  return true;
}
