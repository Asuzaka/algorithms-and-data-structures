function prefixAgain(str: string, n: number): boolean {
  let prefix: string = "";
  for (let i: number = 0; i < n; i++) {
    prefix += str[i];
  }
  return str.indexOf(prefix, n) !== -1;
}

// Problem desc:
// Given a string, consider the prefix string made of the
//  first N chars of the string. Does that prefix string appear somewhere else in the string?
//  Assume that the string is not empty and that N is in the range 1..str.length().

// Data to test
// Test → Expected	Yours	Result
// prefixAgain('abXYabc', 1) → true	true	✔
// prefixAgain('abXYabc', 2) → true	true	✔
// prefixAgain('abXYabc', 3) → false	false	✔
// prefixAgain('xyzxyxyxy', 2) → true	true	✔
// prefixAgain('xyzxyxyxy', 3) → false	false	✔
// prefixAgain('Hi12345Hi6789Hi10', 1) → true	true	✔
// prefixAgain('Hi12345Hi6789Hi10', 2) → true	true	✔
// prefixAgain('Hi12345Hi6789Hi10', 3) → true	true	✔
// prefixAgain('Hi12345Hi6789Hi10', 4) → false	false	✔
// prefixAgain('a', 1) → false	false	✔
// prefixAgain('aa', 1) → true	true	✔
// prefixAgain('ab', 1) → false	false	✔
