function front3(str) {
  if (str.length == 0) return str;
  if (str.length >= 3) return repeatTimes(str[0] + str[1] + str[2], 3);
  let a = str[1] ? str[1] : "";
  return repeatTimes(str[0] + a, 3);
}

function repeatTimes(word, times) {
  let a = "";
  for (let i = 0; i < times; i++) {
    a += word;
  }
  return a;
}

// Problem desc:
// Given a string, we'll say that the front is the first 3 chars of the string. If
//  the string length is less than 3, the front is whatever is there. Return a new
//  string which is 3 copies of the front.

// Data to test
// front3('Java') → JavJavJav	JavJavJav	✔
// front3('Chocolate') → ChoChoCho	ChoChoCho	✔
// front3('abc') → abcabcabc	abcabcabc	✔
// front3('abcXYZ') → abcabcabc	abcabcabc	✔
// front3('ab') → ababab	ababab	✔
// front3('a') → aaa	aaa	✔
// front3('') →		✔
