function nonStart(a, b) {
  return withoutstart(a) + withoutstart(b);
}

function withoutstart(str) {
  let res = "";
  for (let i = 1; i < str.length; i++) {
    res += str[i];
  }
  return res;
}

// Problem desc:
// Given 2 strings, return their concatenation, except omit the first char of
// each. The strings will be at least length 1.
// Data to test
// nonStart('Hello', 'There') → ellohere	ellohere	✔
// nonStart('java', 'code') → avaode	avaode	✔
// nonStart('shotl', 'java') → hotlava	hotlava	✔
// nonStart('ab', 'xy') → by	by	✔
// nonStart('ab', 'x') → b	b	✔
// nonStart('x', 'ac') → c	c	✔
// nonStart('a', 'x') →		✔
// nonStart('kit', 'kat') → itat	itat	✔
// nonStart('mart', 'dart') → artart	artart	✔
