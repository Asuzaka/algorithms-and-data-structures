function countXX(str) {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] + str[i + 1] == "xx") c++;
  }
  return c;
}

// Problem desc:
// Count the number of 'xx' in the given string. We'll say that overlapping is
//  allowed, so 'xxx' contains 2 'xx'.

// Data to test
// countXX('abcxx') → 1	1	✔
// countXX('xxx') → 2	2	✔
// countXX('xxxx') → 3	3	✔
// countXX('abc') → 0	0	✔
// countXX('Hello There') → 0	0	✔
// countXX('Hexxo Thxxe') → 2	2	✔
// countXX('') → 0	0	✔
// countXX('Kittens') → 0	0	✔
// countXX('Kittensxxx') → 2	2	✔
