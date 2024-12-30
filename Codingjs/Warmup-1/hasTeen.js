function hasTeen(a, b, c) {
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19))
    return true;
  else return false;
}

// Problem desc:
// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given
//  3 int values, return true if 1 or more of them are teen.

// Data to test
// hasTeen(13, 20, 10) → true	true	✔
// hasTeen(20, 19, 10) → true	true	✔
// hasTeen(20, 10, 13) → true	true	✔
// hasTeen(1, 20, 12) → false	false	✔
// hasTeen(19, 20, 12) → true	true	✔
// hasTeen(12, 20, 19) → true	true	✔
// hasTeen(12, 9, 20) → false	false	✔
// hasTeen(12, 18, 20) → true	true	✔
// hasTeen(14, 2, 20) → true	true	✔
// hasTeen(4, 2, 20) → false	false	✔
// hasTeen(11, 22, 22) → false	false	✔
