function last2(str) {
  let c = 0,
    count = str[str.length - 2] + str[str.length - 1];
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] + str[i + 1] == count) {
      c++;
    }
  }
  return c;
}

// Problem desc:
// Given a string, return the count of the number of times that a substring
// length 2 appears in the string and also as the last 2 chars of the string, so
//  "hixxxhi" yields 1 (we won't count the end substring).

// Data to test
// last2('hixxhi') → 1	1	✔
// last2('xaxxaxaxx') → 1	1	✔
// last2('axxaaxx') → 1	1	✔
// last2('xxaxxaxxaxx') → 3	3	✔
// last2('xaxaxaa') → 0	0	✔
// last2('xxxx') → 2	2	✔
// last2('13121312') → 1	1	✔
// last2('11212') → 1	1	✔
// last2('13121311') → 0	0	✔
// last2('hi') → 0	0	✔
// last2('h') → 0	0	✔
// last2('') → 0	0	✔
