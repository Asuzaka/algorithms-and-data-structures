function middleThree(str) {
  let res = "";
  for (
    let i = (str.length - 3) / 2;
    i < str.length - (str.length - 3) / 2;
    i++
  ) {
    res += str[i];
  }
  return res;
}

// Problem desc:
// Given a string of odd length, return the string length 3 from its middle, so
//  "Candy" yields "and". The string length will be at least 3.

// Data to test
// middleThree('Candy') → and	and	✔
// middleThree('and') → and	and	✔
// middleThree('solving') → lvi	lvi	✔
// middleThree('Hi yet Hi') → yet	yet	✔
// middleThree('java yet java') → yet	yet	✔
// middleThree('Chocolate') → col	col	✔
// middleThree('XabcxyzabcX') → xyz	xyz	✔
