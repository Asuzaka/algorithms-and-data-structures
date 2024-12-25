function nearHundred(n) {
  if ((n + 10 >= 100 && n - 10 <= 100) || (n + 10 >= 200 && n - 10 <= 200)) {
    return true;
  } else {
    return false;
  }
}

// Problem desc:
// Given an int n, return true if it is within 10 of 100 or 200.
//  Note: Math.abs(num) computes the absolute value of a number.

// Data to test
// nearHundred(93) → true	true	✔
// nearHundred(90) → true	true	✔
// nearHundred(89) → false	false	✔
// nearHundred(110) → true	true	✔
// nearHundred(111) → false	false	✔
// nearHundred(121) → false	false	✔
// nearHundred(0) → false	false	✔
// nearHundred(5) → false	false	✔
// nearHundred(191) → true	true	✔
// nearHundred(189) → false	false	✔
