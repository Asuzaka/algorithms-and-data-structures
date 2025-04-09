function mixString(a: string, b: string): string {
  let result: string = "";
  let longest: number = a.length > b.length ? a.length : b.length;
  for (let i: number = 0; i < longest; i++) {
    if (a[i]) {
      result += a[i];
    }
    if (b[i]) {
      result += b[i];
    }
  }
  return result;
}

// Problem desc:
// Given two strings, a and b, create a bigger string made of the first char of a,
//  the first char of b, the second char of a, the second char of b, and so on.
//  Any leftover chars go at the end of the result.

// Data to test
// Test → Expected	Yours	Result
// mixString('abc', 'xyz') → axbycz	axbycz	✔
// mixString('Hi', 'There') → HTihere	HTihere	✔
// mixString('xxxx', 'There') → xTxhxexre	xTxhxexre	✔
// mixString('xxx', 'X') → xXxx	xXxx	✔
// mixString('2/', '27 around') → 22/7 around	22/7 around	✔
// mixString('', 'Hello') → Hello	Hello	✔
// mixString('Abc', '') → Abc	Abc	✔
// mixString('', '') →		✔
// mixString('a', 'b') → ab	ab	✔
// mixString('ax', 'b') → abx	abx	✔
// mixString('a', 'bx') → abx	abx	✔
// mixString('So', 'Long') → SLoong	SLoong	✔
// mixString('Long', 'So') → LSoong	LSoong	✔
