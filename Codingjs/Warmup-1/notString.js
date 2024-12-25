function notString(str) {
  if (str != "not" && str[0] + str[1] + str[2] != "not") {
    return "not " + str;
  } else {
    return str;
  }
}

// Problem desc:
// Given a string, return a new string where "not " has been added to the
//  front. However, if the string already begins with "not", return the string
//  unchanged.

// Data to test
// notString('candy') → not candy	not candy	✔
// notString('x') → not x	not x	✔
// notString('not bad') → not bad	not bad	✔
// notString('bad') → not bad	not bad	✔
// notString('not') → not	not	✔
// notString('is not') → not is not	not is not	✔
// notString('no') → not no	not no	✔
