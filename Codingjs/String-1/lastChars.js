function lastChars(a, b) {
  return `${a[0] == undefined ? (a[0] = "@") : a[0]}${
    b[b.length - 1] == undefined ? (b = "@") : b[b.length - 1]
  }`;
}

// Problem desc:
// Given 2 strings, a and b, return a new string made of the first char of a and
//  the last char of b, so "yo" and "java" yields "ya". If either string is length
//  0, use '@' for its missing char.

// Data to test
// lastChars('last', 'chars') → ls	ls	✔
// lastChars('yo', 'java') → ya	ya	✔
// lastChars('hi', '') → h@	h@	✔
// lastChars('', 'hello') → @o	@o	✔
// lastChars('', '') → @@	@@	✔
// lastChars('kitten', 'hi') → ki	ki	✔
// lastChars('k', 'zip') → kp	kp	✔
// lastChars('kitten', '') → k@	k@	✔
// lastChars('kitten', 'zip') → kp	kp	✔
