function xyBalance(str: string): boolean {
  let seenY: boolean = false;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "y") {
      seenY = true;
    } else if (str[i] === "x") {
      if (!seenY) {
        return false;
      }
    }
  }
  return true;
}

// Problem desc:
// We'll say that a String is xy-balanced if for all the 'x' chars in the string,
//  there exists a 'y' char somewhere later in the string. So "xxy" is balanced,
//  but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given
//  string is xy-balanced.

// Data to test
// Test → Expected	Yours	Result
// xyBalance('aaxbby') → true	true	✔
// xyBalance('aaxbb') → false	false	✔
// xyBalance('yaaxbb') → false	false	✔
// xyBalance('yaaxbby') → true	true	✔
// xyBalance('xaxxbby') → true	true	✔
// xyBalance('xaxxbbyx') → false	false	✔
// xyBalance('xxbxy') → true	true	✔
// xyBalance('xxbx') → false	false	✔
// xyBalance('bbb') → true	true	✔
// xyBalance('bxbb') → false	false	✔
// xyBalance('bxyb') → true	true	✔
// xyBalance('xy') → true	true	✔
// xyBalance('y') → true	true	✔
// xyBalance('x') → false	false	✔
// xyBalance('') → true	true	✔
// xyBalance('yxyxyxyx') → false	false	✔
// xyBalance('yxyxyxyxy') → true	true	✔
// xyBalance('12xabxxydxyxyzz') → true	true	✔
