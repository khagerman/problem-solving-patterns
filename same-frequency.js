// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
// Constraints

// Time Complexity - O(N + M)
function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;
  function freqObject(num) {
    let obj = {};
    for (let digit of num.toString()) {
      obj[digit] = obj[digit] + 1 || 1;
    }
    return obj;
  }
  let num1Obj = freqObject(num1);
  let num2Obj = freqObject(num2);
  for (key in num1Obj) {
    if (!num2Obj[key]) return false;
    if (num1Obj[key] !== num2Obj[key]) return false;
  }
  return true;
}
