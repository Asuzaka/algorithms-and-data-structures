function plusOut(str: string, word: string) {
  let w: string = "";
  for (let i: number = 0; i < str.length; i++) {
    if (str.substring(i, i + word.length) === word) {
      w += word;
      i += word.length - 1;
    } else {
      w += "+";
    }
  }
  return w;
}

// Problem desc:
// Given a string and a non-empty word string, return a version of the
//  original String where all chars have been replaced by pluses ("+"), except
//  for appearances of the word string which are preserved unchanged.

// Data to test
// Test → Expected	Yours	Result
// plusOut('12xy34', 'xy') → ++xy++	++xy++	✔
// plusOut('12xy34', '1') → 1+++++	1+++++	✔
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy	++xy++xy+++xy	✔
// plusOut('abXYabcXYZ', 'ab') → ab++ab++++	ab++ab++++	✔
// plusOut('abXYabcXYZ', 'abc') → ++++abc+++	++++abc+++	✔
// plusOut('abXYabcXYZ', 'XY') → ++XY+++XY+	++XY+++XY+	✔
// plusOut('abXYxyzXYZ', 'XYZ') → +++++++XYZ	+++++++XYZ	✔
// plusOut('--++ab', '++') → ++++++	++++++	✔
// plusOut('aaxxxxbb', 'xx') → ++xxxx++	++xxxx++	✔
// plusOut('123123', '3') → ++3++3	++3++3	✔
