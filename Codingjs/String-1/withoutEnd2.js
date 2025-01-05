function withoutEnd2(str) {
  let res = "";
  for (let i = 1; i < str.length - 1; i++) {
    res += str[i];
  }
  return res;
}

// Problem desc:
// Given a string, return a version without both the first and last char of the
//  string. The string may be any length, including 0.

// Data to test
// withoutEnd2('Hello') → ell	ell	✔
// withoutEnd2('abc') → b	b	✔
// withoutEnd2('ab') →		✔
// withoutEnd2('a') →		✔
// withoutEnd2('') →		✔
// withoutEnd2('coldy') → old	old	✔
// withoutEnd2('java code') → ava cod	ava cod	✔
