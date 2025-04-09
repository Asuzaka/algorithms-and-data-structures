function deFront(str) {
  let a = "";
  if (str[0] == "a") {
    a += "a";
  }
  if (str[1] == "b") {
    a += "b";
  }

  for (let i = 2; i < str.length; i++) {
    a += str[i];
  }

  return a;
}

// Problem desc:
// Given a string, return a version without the first 2 chars. Except keep the
//  first char if it is 'a' and keep the second char if it is 'b'. The string may be
//  any length. Harder than it looks.

// Data to test
// Test → Expected	Yours	Result
// deFront('Hello') → llo	llo	✔
// deFront('java') → va	va	✔
// deFront('away') → aay	aay	✔
// deFront('axy') → ay	ay	✔
// deFront('abc') → abc	abc	✔
// deFront('xby') → by	by	✔
// deFront('ab') → ab	ab	✔
// deFront('ax') → a	a	✔
// deFront('axb') → ab	ab	✔
// deFront('aaa') → aa	aa	✔
// deFront('xbc') → bc	bc	✔
// deFront('bbb') → bb	bb	✔
// deFront('bazz') → zz	zz	✔
// deFront('ba') →		✔
// deFront('abxyz') → abxyz	abxyz	✔
// deFront('hi') →		✔
// deFront('his') → s	s	✔
// deFront('xz') →		✔
// deFront('zzz') → z	z	✔
