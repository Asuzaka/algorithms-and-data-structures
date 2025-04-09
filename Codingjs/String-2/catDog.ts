function catDog(str: string): boolean {
  let cat: number = 0;
  let dog: number = 0;

  for (let i: number = 0; i < str.length; i++) {
    if (str[i + 2] == undefined) break;
    if (str[i] + str[i + 1] + str[i + 2] == "cat") {
      cat++;
    }
    if (str[i] + str[i + 1] + str[i + 2] == "dog") {
      dog++;
    }
  }

  return cat == dog;
}

// Problem desc:
// Return true if the string "cat" and "dog" appear the same number of times
//  in the given string.

// Data to test
// Test → Expected	Yours	Result
// catDog('catdog') → true	true	✔
// catDog('catcat') → false	false	✔
// catDog('1cat1cadodog') → true	true	✔
// catDog('catxxdogxxxdog') → false	false	✔
// catDog('catxdogxdogxcat') → true	true	✔
// catDog('catxdogxdogxca') → false	false	✔
// catDog('dogdogcat') → false	false	✔
// catDog('dogogcat') → true	true	✔
// catDog('dog') → false	false	✔
// catDog('cat') → false	false	✔
// catDog('ca') → true	true	✔
// catDog('c') → true	true	✔
// catDog('') → true	true	✔
