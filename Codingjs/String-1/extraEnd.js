function extraEnd(str) {
  let end2 = str[str.length - 2] + str[str.length - 1];
  return end2 + end2 + end2;
}

// Problem desc:
// iven a string, return a new string made of 3 copies of the last 2 chars of
//  the original string. The string length will be at least 2.

// Data to test
// extraEnd('Hello') → lololo	lololo	✔
// extraEnd('ab') → ababab	ababab	✔
// extraEnd('Hi') → HiHiHi	HiHiHi	✔
// extraEnd('Candy') → dydydy	dydydy	✔
// extraEnd('Code') → dedede	dedede	✔
