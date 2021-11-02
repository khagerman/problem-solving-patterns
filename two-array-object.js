// add whatever parameters you deem necessary
// twoArrayObject
// Write a function called twoArrayObject which accepts
//  two arrays of varying lengths.The first array consists
//   of keys and the second one consists of values.
//   Your function should return an object created from the keys and values.
//    If there are not enough values, the rest of keys should have a value of null.
//    If there not enough keys, just ignore the rest of values.

// Examples: twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(["a", "b", "c"], [1, 2, 3, 4]); // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(["x", "y", "z"], [1, 2]); // {'x': 1, 'y': 2, 'z': null}
function twoArrayObject(str1, str2) {
  //   function objMaker(str) {
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      obj[str1[i]] = str2[i] || null;
    }
  }
  console.log(obj);
  return obj;
}

// answers way

function twoArrayObjectAnswer(keys, values) {
  return keys.reduce((obj, cur, idx) => {
    obj[cur] = idx < values.length ? values[idx] : null;
    return obj;
  }, {});
}
