function nTwice(str, n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += str[i];
  }
  for (let i = str.length - n; i < str.length; i++) {
    res += str[i];
  }
  return res;
}

// Problem desc:
// Given a string and an int n, return a string made of the first and last n chars
//  from the string. The string length will be at least n.

// Data to test
// nTwice('hello', 2) → helo	helo	✔
// nTwice('Chocolate', 3) → Choate	Choate	✔
// nTwice('Chocolate', 1) → Ce	Ce	✔
// nTwice('Chocolate', 0) →		✔
// nTwice('Hello', 4) → Hellello	Hellello	✔
// nTwice('Code', 4) → CodeCode	CodeCode	✔
// nTwice('Code', 2) → Code	Code	✔
