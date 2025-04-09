function doubleChar(str: string): string {
  let word: string = "";
  for (let i: number = 0; i < str.length; i++) {
    word += str[i] + str[i];
  }
  return word;
}

// Problem desc:
// Given a string, return a string where for every char in the original, there
// are two chars.

// Data to test
// Test → Expected	Yours	Result
// doubleChar('The') → TThhee	TThhee	✔
// doubleChar('AAbb') → AAAAbbbb	AAAAbbbb	✔
// doubleChar('Hi-There') → HHii--TThheerree	HHii--TThheerree	✔
// doubleChar('Word!') → WWoorrdd!!	WWoorrdd!!	✔
// doubleChar('!!') → !!!!	!!!!	✔
// doubleChar('') →		✔
// doubleChar('a') → aa	aa	✔
// doubleChar('.') → ..	..	✔
// doubleChar('aa') → aaaa	aaaa	✔
