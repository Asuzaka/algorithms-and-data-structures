function backAround(str) {
  return str[str.length - 1] + str + str[str.length - 1];
}

// Problem desc:
// Given a string, take the last char and return a new string with the last char
//  added at the front and back, so 'cat' yields 'tcatt' The original string will be
//  length 1 or more.

// Data to test
// backAround('cat') → tcatt	tcatt	✔
// backAround('Hello') → oHelloo	oHelloo	✔
// backAround('a') → aaa	aaa	✔
// backAround('abc') → cabcc	cabcc	✔
// backAround('read') → dreadd	dreadd	✔
// backAround('boo') → obooo	obooo	✔
