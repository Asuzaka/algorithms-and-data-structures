function doubleX(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      if (str[i + 1] == "x") return true;
      return false;
    }
  }
  return false;
}

// Problem desc:
// Given a string, return true if the first instance of "x" in the string is
//  immediately followed by another "x".

// Data to test
// doubleX('axxbb') → true	true	✔
// doubleX('axaxax') → false	false	✔
// doubleX('xxxxx') → true	true	✔
// doubleX('xaxxx') → false	false	✔
// doubleX('aaaax') → false	false	✔
// doubleX('') → false	false	✔
// doubleX('abc') → false	false	✔
// doubleX('x') → false	false	✔
// doubleX('xx') → true	true	✔
// doubleX('xaxx') → false	false	✔
