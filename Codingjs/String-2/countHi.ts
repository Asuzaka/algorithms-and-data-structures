function countHi(str: string): number {
  let r: number = 0;
  for (let i: number = 0; i < str.length - 1; i++) {
    if (str[i] + str[i + 1] == "hi") {
      r++;
    }
  }
  return r;
}

// Problem desc:
// Return the number of times that the string "hi" appears anywhere in the
// given string.

// Data to test
// Test → Expected	Yours	Result
// countHi('abc hi ho') → 1	1	✔
// countHi('ABChi hi') → 2	2	✔
// countHi('hihi') → 2	2	✔
// countHi('hiHIhi') → 2	2	✔
// countHi('') → 0	0	✔
// countHi('h') → 0	0	✔
// countHi('hi') → 1	1	✔
// countHi('Hi is no HI on ahI') → 0	0	✔
// countHi('hiho not HOHIhi') → 2	2	✔
