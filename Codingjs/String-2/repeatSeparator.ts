function repeatSeparator(word: string, sep: string, count: number): string {
  let result: string = "";
  for (let i: number = 0; i < count; i++) {
    if (i == count - 1) {
      result += word;
      break;
    }
    result += word + sep;
  }
  return result;
}

// Problem desc:
// Given two strings, word and a separator sep, return a big string made of
//  count occurrences of the word, separated by the separator string.

// Data to test
// Test → Expected	Yours	Result
// repeatSeparator('Word', 'X', 3) → WordXWordXWord	WordXWordXWord	✔
// repeatSeparator('This', 'And', 2) → ThisAndThis	ThisAndThis	✔
// repeatSeparator('This', 'And', 1) → This	This	✔
// repeatSeparator('Hi', '-n-', 2) → Hi-n-Hi	Hi-n-Hi	✔
// repeatSeparator('AAA', '', 1) → AAA	AAA	✔
// repeatSeparator('AAA', '', 0) →		✔
// repeatSeparator('A', 'B', 5) → ABABABABA	ABABABABA	✔
// repeatSeparator('abc', 'XX', 3) → abcXXabcXXabc	abcXXabcXXabc	✔
// repeatSeparator('abc', 'XX', 2) → abcXXabc	abcXXabc	✔
// repeatSeparator('abc', 'XX', 1) → abc	abc	✔
// repeatSeparator('XYZ', 'a', 2) → XYZaXYZ	XYZaXYZ	✔
