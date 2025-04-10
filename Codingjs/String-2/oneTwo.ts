function oneTwo(str: string): string {
  let result: string = "";
  for (let i: number = 0; i < str.length - 2; i += 3) {
    result += str[i + 1] + str[i + 2] + str[i];
  }
  return result;
}

// Problem desc:
// Given a string, compute a new string by moving the first char to come
//  after the next two chars, so "abc" yields "bca". Repeat this process for
//  each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any
//  group of fewer than 3 chars at the end.

// Data to test
// Test → Expected	Yours	Result
// oneTwo('abc') → bca	bca	✔
// oneTwo('tca') → cat	cat	✔
// oneTwo('tcagdo') → catdog	catdog	✔
// oneTwo('chocolate') → hocolctea	hocolctea	✔
// oneTwo('1234567890') → 231564897	231564897	✔
// oneTwo('xabxabxabxabxabxabxab') → abxabxabxabxabxabxabx	abxabxabxabxabxabxabx	✔
// oneTwo('abcdefx') → bcaefd	bcaefd	✔
// oneTwo('abcdefxy') → bcaefd	bcaefd	✔
// oneTwo('abcdefxyz') → bcaefdyzx	bcaefdyzx	✔
// oneTwo('') →		✔
// oneTwo('x') →		✔
// oneTwo('xy') →		✔
// oneTwo('xyz') → yzx	yzx	✔
// oneTwo('abcdefghijklkmnopqrstuvwxyz1234567890') → bcaefdhigkljmnkpqostrvwuyzx231564897	bcaefdhigkljmnkpqostrvwuyzx231564897	✔
// oneTwo('abcdefghijklkmnopqrstuvwxyz123456789') → bcaefdhigkljmnkpqostrvwuyzx231564897	bcaefdhigkljmnkpqostrvwuyzx231564897	✔
// oneTwo('abcdefghijklkmnopqrstuvwxyz12345678') → bcaefdhigkljmnkpqostrvwuyzx231564	bcaefdhigkljmnkpqostrvwuyzx231564	✔
