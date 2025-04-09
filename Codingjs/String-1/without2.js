function without2(str) {
  if (
    str.length < 2 ||
    str[0] + str[1] != str[str.length - 2] + str[str.length - 1]
  ) {
    return str;
  }
  let a = "";
  for (let i = 2; i < str.length; i++) {
    a += str[i];
  }
  return a;
}

// Problem desc:
//  Given a string, if a length 2 substring appears at both its beginning and end,
//  return a string without the substring at the beginning, so "HelloHe"
//  yields "lloHe". The substring may overlap with itself, so "Hi" yields "".
//  Otherwise, return the original string unchanged.

// Data to test
// Test → Expected	Yours	Result
// without2('HelloHe') → lloHe	lloHe	✔
// without2('HelloHi') → HelloHi	HelloHi	✔
// without2('Hi') →		✔
// without2('Chocolate') → Chocolate	Chocolate	✔
// without2('xxx') → x	x	✔
// without2('xx') →		✔
// without2('x') → x	x	✔
// without2('') →		✔
// without2('Fruits') → Fruits	Fruits	✔
