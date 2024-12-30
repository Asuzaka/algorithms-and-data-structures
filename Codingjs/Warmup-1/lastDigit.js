function lastDigit(a, b, c) {
  let aR = a % 10;
  let bR = b % 10;
  if (aR === bR) return true;
  else return false;
}

// Problem desc:
// Given two non-negative int values, return true if they have the same last
//  digit, such as with 27 and 57. Note that the % 'mod' operator computes
//  remainders, so 17 % 10 is 7.

// Data to test
// lastDigit(7, 17) → true	true	✔
// lastDigit(6, 17) → false	false	✔
// lastDigit(3, 113) → true	true	✔
// lastDigit(114, 113) → false	false	✔
// lastDigit(114, 4) → true	true	✔
// lastDigit(10, 0) → true	true	✔
// lastDigit(11, 0) → false	false	✔
