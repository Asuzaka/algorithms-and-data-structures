function right2(str) {
  let res = "";
  for (let i = 0; i < str.length - 2; i++) {
    res += str[i];
  }
  return str[str.length - 2] + str[str.length - 1] + res;
}

// Problem desc:
// Given a string, return a "rotated right 2" version where the last 2 chars
//  are moved to the start. The string length will be at least 2.

// Data to test
// right2('Hello') → loHel	loHel	✔
// right2('java') → vaja	vaja	✔
// right2('Hi') → Hi	Hi	✔
// right2('code') → deco	deco	✔
// right2('cat') → atc	atc	✔
// right2('12345') → 45123	45123	✔
