function firstTwo(str) {
  if (!str[1] && str.length > 0) return str[0];
  if (str[1]) return str[0] + str[1];
  return str;
}

// Problem desc:
// Given a string, return the string made of its first two chars, so the String
// "Hello" yields "He". If the string is shorter than length 2, return whatever
// there is, so "X" yields "X", and the empty string "" yields the empty string
//  "". Note that str.length() returns the length of a string.

// Data to test
// firstTwo('Hello') → He	He	✔
// firstTwo('abcdefg') → ab	ab	✔
// firstTwo('ab') → ab	ab	✔
// firstTwo('a') → a	a	✔
// firstTwo('') →		✔
// firstTwo('kitten') → ki	ki	✔
// firstTwo('hi') → hi	hi	✔
// firstTwo('hiya') → hi	hi	✔
