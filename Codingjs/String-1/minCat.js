function minCat(a, b) {
  if (a.length > b.length) return `${a.slice(a.length - b.length) + b}`;
  else if (b.length > a.length) return `${a + b.slice(b.length - a.length)}`;
}

// Problem desc:
// Given two strings, append them together (known as "concatenation") and
// return the result. However, if the strings are different lengths, omit chars
//  from the longer string so it is the same length as the shorter string.
//  So "Hello" and "Hi" yield "loHi". The strings may be any length.

// Data to test
// Test → Expected	Yours	Result
// minCat('Hello', 'Hi') → loHi	loHi	✔
// minCat('Hello', 'java') → ellojava	ellojava	✔
// minCat('java', 'Hello') → javaello	javaello	✔
// minCat('abc', 'x') → cx	cx	✔
// minCat('x', 'abc') → xc	xc	✔
// minCat('abc', '') →		✔
