function lastTwo(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length - 2 != i) {
      res += str[i];
    } else {
      res += str[str.length - 1] + str[str.length - 2];
      break;
    }
  }
  return res;
}

// Problem desc:
// Given a string of any length, return a new string where the last 2 chars, if
//  present, are swapped, so "coding" yields "codign".

// Data to test
// lastTwo('coding') → codign	codign	✔
// lastTwo('cat') → cta	cta	✔
// lastTwo('ab') → ba	ba	✔
// lastTwo('a') → a	a	✔
// lastTwo('') →		✔
