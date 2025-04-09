function extraFront(str) {
  let a = "";
  for (let i = 0; i < 2; i++) {
    if (str[i] == undefined) break;
    a += str[i];
  }

  return a + a + a;
}

// Problem desc:
// Given a string, return a new string made of 3 copies of the first 2 chars of
// the original string. The string may be any length. If there are fewer than 2
// chars, use whatever is there.

// Data to test
// extraFront('Hello') → HeHeHe	HeHeHe	✔
// extraFront('ab') → ababab	ababab	✔
// extraFront('H') → HHH	HHH	✔
// extraFront('') →		✔
// extraFront('Candy') → CaCaCa	CaCaCa	✔
// extraFront('Code') → CoCoCo	CoCoCo	✔
