function frontTimes(str, n) {
  let res = "";

  let p1 = str[0] ? str[0] : "";
  let p2 = str[1] ? str[1] : "";
  let p = str[2] ? str[2] : "";

  for (let i = 0; i < n; i++) {
    res += p1 + p2 + p;
  }
  return res;
}

// Problem desc:
// Given a string and a non-negative int n, we'll say that the front of the
//  string is the first 3 chars, or whatever is there if the string is less than
// length 3. Return n copies of the front.

// Data to test
// frontTimes('Chocolate', 2) → ChoCho	ChoCho	✔
// frontTimes('Chocolate', 3) → ChoChoCho	ChoChoCho	✔
// frontTimes('Abc', 3) → AbcAbcAbc	AbcAbcAbc	✔
// frontTimes('Ab', 4) → AbAbAbAb	AbAbAbAb	✔
// frontTimes('A', 4) → AAAA	AAAA	✔
// frontTimes('',4) →		✔
// frontTimes('Abc', 0) →		✔
