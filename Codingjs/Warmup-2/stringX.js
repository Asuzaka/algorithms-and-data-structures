function stringX(str) {
  // if (str[0] == "x" && str.length == 1) return "xx";
  // kinda idk
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] != "x") res += str[i];
    else if (0 == i || str.length - 1 == i) res += str[i];
  }
  return res;
}

// Problem desc:
// Given a string, return a version where all the "x" have been removed.
//  Except an "x" at the very start or end should not be removed.

//Data to test
// stringX('xxHxix') → xHix	xHix	✔
// stringX('abxxxcd') → abcd	abcd	✔
// stringX('xabxxxcdx') → xabcdx	xabcdx	✔
// stringX('xKittenx') → xKittenx	xKittenx	✔
// stringX('Hello') → Hello	Hello	✔
// stringX('xx') → xx	xx	✔
// stringX('x') → xx	xx	✔
// stringX('') →		✔
