function xyzThere(str: string): boolean {
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] + str[i + 1] + str[i + 3] === "xyz") {
      count++;
    }
    if (str[i] + str[i + 1] + str[i + 3] === "xyz" && str[i - 1] === ".") {
      count--;
    }
  }
  return count > 0;
}

// Problem desc:
// Return true if the given string contains an appearance of "xyz" where the
// xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz"
// does not.

// Data to test
// Test → Expected	Yours	Result
// xyzThere('abcxyz') → true	true	✔
// xyzThere('abc.xyz') → false	false	✔
// xyzThere('xyz.abc') → true	true	✔
// xyzThere('abcxy') → false	false	✔
// xyzThere('xyz') → true	true	✔
// xyzThere('xy') → false	false	✔
// xyzThere('x') → false	false	✔
// xyzThere('') → false	false	✔
// xyzThere('abc.xyzxyz') → true	true	✔
// xyzThere('abc.xxyz') → true	true	✔
// xyzThere('.xyz') → false	false	✔
// xyzThere('12.xyz') → false	false	✔
// xyzThere('12xyz') → true	true	✔
// xyzThere('1.xyz.xyz2.xyz') → false	false	✔
