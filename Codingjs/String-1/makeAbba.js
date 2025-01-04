function makeAbba(a, b) {
  return a + b + b + a;
}

// Problem desc:
// Given two strings, a and b, return the result of putting them together
//  in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Data to test
// makeAbba('Hi', 'Bye') → HiByeByeHi	HiByeByeHi	✔
// makeAbba('Yo', 'Alice') → YoAliceAliceYo	YoAliceAliceYo	✔
// makeAbba('What', 'Up') → WhatUpUpWhat	WhatUpUpWhat	✔
// makeAbba('aaa', 'bbb') → aaabbbbbbaaa	aaabbbbbbaaa	✔
// makeAbba('x', 'y') → xyyx	xyyx	✔
// makeAbba('x', '') → xx	xx	✔
// makeAbba('ba', 'Ya') → baYaYaba	baYaYaba	✔
// makeAbba('Ya', 'Ya') → YaYaYaYa	YaYaYaYa	✔
