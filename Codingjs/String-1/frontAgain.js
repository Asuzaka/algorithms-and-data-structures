function frontAgain(str) {
  if (str[0] + str[1] == str[str.length - 2] + str[str.length - 1]) return true;
  else return false;
}

// Problem desc:
// Given a string, return true if the first 2 chars in the string also appear at the
//  end of the string, such as with "edited".

// Data to test
// frontAgain('edited') → true	true	✔
// frontAgain('edit') → false	false	✔
// frontAgain('ed') → true	true	✔
// frontAgain('jj') → true	true	✔
// frontAgain('jjj') → true	true	✔
// frontAgain('jjjj') → true	true	✔
// frontAgain('jjjk') → false	false	✔
// frontAgain('x') → false	false	✔
// frontAgain('') → false	false	✔
// frontAgain('java') → false	false	✔
// frontAgain('javaja') → true	true	✔
