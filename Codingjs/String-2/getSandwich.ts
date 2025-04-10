function getSandwich(str: string): string {
  let cords: number[] = [];
  for (let i: number = 0; i < str.length; i++) {
    if (str[i + 4] == undefined) break;
    if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4] === "bread")
      cords.push(i + 5);
  }
  let result: string = "";
  if (cords.length < 2) return result;
  for (let i: number = cords[0]; i < cords[cords.length - 1] - 5; i++) {
    result += str[i];
  }
  return result;
}

// Problem desc:
// A sandwich is two pieces of bread with something in between. Return the
//  string that is between the first and last appearance of "bread" in the given
//  string, or return the empty string "" if there are not two pieces of bread.

// Data to test
// Test → Expected	Yours	Result
// getSandwich('breadjambread') → jam	jam	✔
// getSandwich('xxbreadjambreadyy') → jam	jam	✔
// getSandwich('xxbreadyy') →		✔
// getSandwich('xxbreadbreadjambreadyy') → breadjam	breadjam	✔
// getSandwich('breadAbread') → A	A	✔
// getSandwich('breadbread') →		✔
// getSandwich('abcbreaz') →		✔
// getSandwich('xyz') →		✔
// getSandwich('') →		✔
// getSandwich('breadbreaxbread') → breax	breax	✔
// getSandwich('breaxbreadybread') → y	y	✔
// getSandwich('breadbreadbreadbread') → breadbread	breadbread	✔
