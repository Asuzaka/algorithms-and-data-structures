function withoutX(str) {
  if (str.length === 0) {
    return str;
  }
  let s = 0;
  let e = str.length;

  if (str[0] == "x") {
    s++;
  }
  if (str[e - 1] == "x") {
    e--;
  }

  let a = "";
  for (let i = s; i < e; i++) {
    a += str[i];
  }

  return a;
}

// Problem desc:
// Given a string, if the first or last chars are 'x', return the string without
//  those 'x' chars, and otherwise return the string unchanged.

// Data to test
// Test → Expected	Yours	Result
// withoutX('xHix') → Hi	Hi	✔
// withoutX('xHi') → Hi	Hi	✔
// withoutX('Hxix') → Hxi	Hxi	✔
// withoutX('Hi') → Hi	Hi	✔
// withoutX('xxHi') → xHi	xHi	✔
// withoutX('Hix') → Hi	Hi	✔
// withoutX('xaxbx') → axb	axb	✔
// withoutX('xx') →		✔
// withoutX('x') →		✔
// withoutX('') →		✔
// withoutX('Hello') → Hello	Hello	✔
// withoutX('Hexllo') → Hexllo	Hexllo	✔
