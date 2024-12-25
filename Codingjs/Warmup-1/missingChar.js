function missingChar(str, n) {
  let a = "";
  for (let i = 0; i < str.length; i++) {
    if (i == n) {
      // skip
    } else {
      a += str[i];
    }
  }
  return a;
}

// Problem desc:
// Given a non-empty string and an int n, return a new string where the char
// at index n has been removed. The value of n will be a valid index of a char
//  in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

// Data to test
// missingChar('kitten', 1) → ktten	ktten	✔
// missingChar('kitten', 0) → itten	itten	✔
// missingChar('kitten', 4) → kittn	kittn	✔
// missingChar('Hi', 0) → i	i	✔
// missingChar('Hi', 1) → H	H	✔
// missingChar('code', 0) → ode	ode	✔
// missingChar('code', 1) → cde	cde	✔
// missingChar('code', 2) → coe	coe	✔
// missingChar('code', 3) → cod	cod	✔
// missingChar('chocolate', 8) → chocolat	chocolat	✔
