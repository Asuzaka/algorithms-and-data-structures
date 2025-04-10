function wordEnds(str: string, word: string) {
  var result: string = "";
  var wordLength: number = word.length;
  for (var i: number = 0; i < str.length; i++) {
    if (str.substring(i, i + wordLength).toLowerCase() === word.toLowerCase()) {
      if (i > 0) {
        result += str[i - 1];
      }
      if (i + wordLength < str.length) {
        result += str[i + wordLength];
      }
    }
  }
  return result;
}

// Problem desc:
// Given a string and a non-empty word string, return a string made of each
//  char just before and just after every appearance of the word in the string.
//  Ignore cases where there is no char before or after the word, and a char
//  may be included twice if it is between two words.

// Data to test
// Test → Expected	Yours	Result
// wordEnds('abcXY123XYijk', 'XY') → c13i	c13i	✔
// wordEnds('XY123XY', 'XY') → 13	13	✔
// wordEnds('XY1XY', 'XY') → 11	11	✔
// wordEnds('XYXY', 'XY') → XY	XY	✔
// wordEnds('XY', 'XY') →		✔
// wordEnds('Hi', 'XY') →		✔
// wordEnds('', 'XY') →		✔
// wordEnds('abc1xyz1i1j', '1') → cxziij	cxziij	✔
// wordEnds('abc1xyz1', '1') → cxz	cxz	✔
// wordEnds('abc1xyz11', '1') → cxz11	cxz11	✔
// wordEnds('abc1xyz1abc', 'abc') → 11	11	✔
// wordEnds('abc1xyz1abc', 'b') → acac	acac	✔
// wordEnds('abc1abc1abc', 'abc') → 1111	1111	✔
