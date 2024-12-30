function front22(str) {
  if (str.length < 2) {
    return str[0] + str[0] + str[0] || str;
  }
  return str[0] + str[1] + str + str[0] + str[1];
}

// Problem desc:
//Given a string, take the first 2 chars and return the string with the 2 chars
//  added at both the front and back, so 'kitten' yields 'kikittenki' chars are
//  there.

// Data to test
// front22('kitten') → kikittenki	kikittenki	✔
// front22('Ha') → HaHaHa	HaHaHa	✔
// front22('abc') → ababcab	ababcab	✔
// front22('ab') → ababab	ababab	✔
// front22('a') → aaa	aaa	✔
// front22('') →		✔
// front22('Logic') → LoLogicLo	LoLogicLo	✔
