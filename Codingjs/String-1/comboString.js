function comboString(a, b) {
  if (a.length > b.length) return b + a + b;
  if (b.length > a.length) return a + b + a;
}

// Problem desc:
// Given 2 strings, a and b, return a string of the form short+long+short, with
//  the shorter string on the outside and the longer string on the inside. The
//  strings will not be the same length, but they may be empty (length 0).

// Data to test
// comboString('Hello', 'hi') → hiHellohi	hiHellohi	✔
// comboString('Hi', 'Hello') → HiHelloHi	HiHelloHi	✔
// comboString('aaa', 'b') → baaab	baaab	✔
// comboString('b', 'aaa') → baaab	baaab	✔
// comboString('aaa', '') → aaa	aaa	✔
// comboString('', 'bb') → bb	bb	✔
// comboString('aaa', '1234') → aaa1234aaa	aaa1234aaa	✔
// comboString('aaa', 'bb') → bbaaabb	bbaaabb	✔
// comboString('a', 'bb') → abba	abba	✔
// comboString('bb', 'a') → abba	abba	✔
// comboString('a', 'bb') → abba	abba	✔
// comboString('xyz', 'ab') → abxyzab	abxyzab	✔
