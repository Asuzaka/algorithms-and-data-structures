function withoutX2(str) {
  let result = "";

  if (str[0] && str[0] != "x") {
    result += str[0];
  }
  if (str[1] && str[1] != "x") {
    result += str[1];
  }

  for (let i = 2; i < str.length; i++) {
    if (str[i] == undefined) break;
    result += str[i];
  }

  return result;
}

// Problem desc:
//  Given a string, if one or both of the first 2 chars is 'x', return the string
//  without those 'x' chars, and otherwise return the string unchanged. This is
//  a little harder than it looks.

// Data to test
// Test → Expected	Yours	Result
// withoutX2('xHi') → Hi	Hi	✔
// withoutX2('Hxi') → Hi	Hi	✔
// withoutX2('Hi') → Hi	Hi	✔
// withoutX2('xxHi') → Hi	Hi	✔
// withoutX2('Hix') → Hix	Hix	✔
// withoutX2('xaxb') → axb	axb	✔
// withoutX2('xx') →		✔
// withoutX2('x') →		✔
// withoutX2('') →		✔
// withoutX2('Hello') → Hello	Hello	✔
// withoutX2('Hexllo') → Hexllo	Hexllo	✔
// withoutX2('xHxllo') → Hxllo	Hxllo	✔
