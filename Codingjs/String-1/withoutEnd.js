function withoutEnd(str) {
  let res = "";
  for (let i = 1; i < str.length - 1; i++) {
    res += str[i];
  }
  return res;
}

// Problem desc:
// Given a string, return a version without the first and last char, so "Hello"
// yields "ell". The string length will be at least 2.

// Data to test
// withoutEnd('Hello') → ell	ell	✔
// withoutEnd('java') → av	av	✔
// withoutEnd('coding') → odin	odin	✔
// withoutEnd('code') → od	od	✔
// withoutEnd('ab') →		✔
// withoutEnd('Chocolate!') → hocolate	hocolate	✔
// withoutEnd('kitten') → itte	itte	✔
// withoutEnd('woohoo') → ooho	ooho	✔
