// add whatever parameters you deem necessary
// isSubsequence
// Write a function called isSubsequence which takes
// in two strings and checks whether the characters in the
//  first string form a subsequence of the characters in the second string.
//  In other words, the function should check whether the characters in the
//  first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

// use freqency count, but how to check in order?
// how to check if in correct order?
// set equel to iterval?
// see if interval in second greater or equal to first?

function isSubsequence(str1, str2) {
  function charInterval(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = i;
    }
    return obj;
  }
  let str1Obj = charInterval(str1);
  let str2Obj = charInterval(str2);
  for (let key in str1Obj) {
    if (str2Obj[key] < str1Obj[key]) return false;
    if (str2Obj[key] === undefined) return false;
  }
  return true;
}
// console.log(
//   isSubsequence("hello", "hello world"), // true
//   isSubsequence("sing", "sting"), // true
//   isSubsequence("abc", "abracadabra"), // true
//   isSubsequence("abc", "acb") // false (order matters)
// );
