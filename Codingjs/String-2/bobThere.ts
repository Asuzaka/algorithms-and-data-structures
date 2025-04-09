function bobThere(str: string): boolean {
  let r: boolean = false;
  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] + str[i + 2] === "bb") {
      r = true;
    }
  }
  return r;
}

// Problem desc:
// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

// Data to test
// Test → Expected	Yours	Result
// bobThere('abcbob') → true	true	✔
// bobThere('b9b') → true	true	✔
// bobThere('bac') → false	false	✔
// bobThere('bbb') → true	true	✔
// bobThere('abcdefb') → false	false	✔
// bobThere('123abcbcdbabxyz') → true	true	✔
// bobThere('b12') → false	false	✔
// bobThere('b1b') → true	true	✔
// bobThere('b12b1b') → true	true	✔
// bobThere('bbc') → false	false	✔
// bobThere('bbb') → true	true	✔
// bobThere('bb') → false	false	✔
// bobThere('b') → false	false	✔
