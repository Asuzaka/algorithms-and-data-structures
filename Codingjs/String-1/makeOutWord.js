function makeOutWord(out, word) {
  let firstPart = out[0] + out[1];
  let lastPart = out[2] + out[3];
  return firstPart + word + lastPart;
}

// Problem desc:
// Given an "out" string length 4, such as "<<>>", and a word, return a new
//  string where the word is in the middle of the out string, e.g. "<<word>>".
// Note: use str.substring(i, j) to extract the String starting at index i and
// going up to but not including index j.

// Data to test
// makeOutWord('<<>>', 'Yay') → <>	<>	✔
// makeOutWord('<<>>', 'WooHoo') → <>	<>	✔
// makeOutWord('[[]]', 'word') → [[word]]	[[word]]	✔
// makeOutWord('HHoo', 'Hello') → HHHellooo	HHHellooo	✔
// makeOutWord('abyz', 'YAY') → abYAYyz	abYAYyz	✔
