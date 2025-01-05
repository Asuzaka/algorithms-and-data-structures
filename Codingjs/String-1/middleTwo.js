// TECHNICAL PROBLEM IN CODINGJS

function middleTwo(str) {
  if (str.length % 2 !== 0) return str;
  else return "";
}

// Problem desc:
// Given a string of even length, return a string made of the middle two
//  chars, so the string "string" yields "ri". The string length will be at least 2.

// Data to test
// middleTwo('string') →		✔
// middleTwo('code') →		✔
// middleTwo('Practice') →		✔
// middleTwo('ab') →		✔
// middleTwo('123456789') → 123456789	123456789	✔
