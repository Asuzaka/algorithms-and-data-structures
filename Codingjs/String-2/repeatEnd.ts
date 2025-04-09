function repeatEnd(str: string, n: number): string {
  let a: string = "";
  for (let i: number = str.length - n; i < str.length; i++) {
    a += str[i];
  }

  let result: string = "";
  let b: number = 0;
  function repeat(value: string): void {
    if (b >= n) return;
    result += value;
    b++;
    repeat(value);
  }
  repeat(a);
  return result;
}

// Problem desc:
// Given a string and an int n, return a string made of n repetitions of the last
// n characters of the string. You may assume that n is between 0 and the
//  length of the string, inclusive.

// Data to test
// Test → Expected	Yours	Result
// repeatEnd('Hello', 3) → llollollo	llollollo	✔
// repeatEnd('Hello', 2) → lolo	lolo	✔
// repeatEnd('Hello', 1) → o	o	✔
// repeatEnd('Hello', 0) →		✔
// repeatEnd('abc', 3) → abcabcabc	abcabcabc	✔
// repeatEnd('1234', 2) → 3434	3434	✔
// repeatEnd('1234', 3) → 234234234	234234234	✔
// repeatEnd('', 0) →		✔
