function countCode(str: string): number {
  let r: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 3] == undefined) break;
    if (str[i] + str[i + 1] + str[i + 3] == "coe") r++;
  }
  return r;
}

// Problem desc:
// Return the number of times that the string "code" appears anywhere in the
//  given string, except we'll accept any letter for the 'd', so "cope" and "cooe"
//  count.

// Data to test
// Test → Expected	Yours	Result
// countCode('aaacodebbb') → 1	1	✔
// countCode('codexxcode') → 2	2	✔
// countCode('cozexxcope') → 2	2	✔
// countCode('cozfxxcope') → 1	1	✔
// countCode('xxcozeyycop') → 1	1	✔
// countCode('cozcop') → 0	0	✔
// countCode('abcxyz') → 0	0	✔
// countCode('code') → 1	1	✔
// countCode('ode') → 0	0	✔
// countCode('c') → 0	0	✔
// countCode('') → 0	0	✔
// countCode('AAcodeBBcoleCCccoreDD') → 3	3	✔
// countCode('AAcodeBBcoleCCccorfDD') → 2	2	✔
// countCode('coAcodeBcoleccoreDD') → 3	3	✔
