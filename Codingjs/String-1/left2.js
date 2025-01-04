function left2(str) {
  let res = "";
  for (let i = 2; i < str.length; i++) {
    res += str[i];
  }
  return res + str[0] + str[1];
}

// Problem desc:
// Given a string, return a "rotated left 2" version where the first 2 chars are
// moved to the end. The string length will be at least 2.

// Data to test
// left2('Hello') → lloHe	lloHe	✔
// left2('java') → vaja	vaja	✔
// left2('Hi') → Hi	Hi	✔
// left2('code') → deco	deco	✔
// left2('cat') → tca	tca	✔
// left2('12345') → 34512	34512	✔
// left2('Chocolate') → ocolateCh	ocolateCh	✔
// left2('bricks') → icksbr	icksbr	✔
