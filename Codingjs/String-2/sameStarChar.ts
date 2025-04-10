function sameStarChar(str: string): boolean {
  for (let i: number = 1; i < str.length - 1; i++) {
    if (str[i] === "*") {
      if (str[i - 1] !== str[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

// Problem desc:
// Returns true if for every '*' (star) in the string, if there are chars both
// immediately before and after the star, they are the same.

// Data to test
// Test → Expected	Yours	Result
// sameStarChar('xy*yzz') → true	true	✔
// sameStarChar('xy*zzz') → false	false	✔
// sameStarChar('*xa*az') → true	true	✔
// sameStarChar('*xa*bz') → false	false	✔
// sameStarChar('*xa*a*') → true	true	✔
// sameStarChar('') → true	true	✔
// sameStarChar('*xa*a*a') → true	true	✔
// sameStarChar('*xa*a*b') → false	false	✔
// sameStarChar('*12*2*2') → true	true	✔
// sameStarChar('12*2*3*') → false	false	✔
// sameStarChar('abcDEF') → true	true	✔
// sameStarChar('XY*YYYY*Z*') → false	false	✔
// sameStarChar('XY*YYYY*Y*') → true	true	✔
// sameStarChar('12*2*3*') → false	false	✔
// sameStarChar('*') → true	true	✔
// sameStarChar('**') → true	true	✔
