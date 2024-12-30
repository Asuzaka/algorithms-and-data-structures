function everyNth(str, n) {
  let instance = 0;
  let res = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[instance]) {
      res += str[instance];
      instance += n;
    }
  }
  return res;
}

// Problem desc:
// Given a non-empty string and an int N, return the string made starting with
// char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6,
// ... and so on. N is 1 or more.

// Data to test
// everyNth('Miracle', 2) → Mrce	Mrce	✔
// everyNth('abcdefg', 2) → aceg	aceg	✔
// everyNth('abcdefg', 3) → adg	adg	✔
// everyNth('Chocolate', 3) → Cca	Cca	✔
// everyNth('Chocolates', 3) → Ccas	Ccas	✔
// everyNth('Chocolates', 4) → Coe	Coe	✔
// everyNth('Chocolates', 100) → C	C	✔
