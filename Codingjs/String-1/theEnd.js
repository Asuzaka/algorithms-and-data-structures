function theEnd(str, front) {
  if (front) return str[0];
  else return str[str.length - 1];
}

// Problem desc:
// Given a string, return a string length 1 from its front, unless front is false,
//  in which case return a string length 1 from its back. The string will be non-empty.

// Data to test
// theEnd('Hello', true) → H	H	✔
// theEnd('Hello', false) → o	o	✔
// theEnd('oh', true) → o	o	✔
// theEnd('oh', false) → h	h	✔
// theEnd('x', true) → x	x	✔
// theEnd('x', false) → x	x	✔
// theEnd('java', true) → j	j	✔
// theEnd('chocolate', false) → e	e	✔
// theEnd('1234', true) → 1	1	✔
// theEnd('code', false) → e	e	✔
