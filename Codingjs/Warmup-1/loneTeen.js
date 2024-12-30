function loneTeen(a, b) {
  if (
    ((a >= 13 && a <= 19 && b < 13) ||
      b > 19 ||
      (b >= 13 && b <= 19 && a < 13) ||
      a > 19) &&
    a != b
  )
    return true;
  else return false;
}

// Problem desc:
// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given
//  2 int values, return true if one or the other is teen, but not both.

// Data to test
// loneTeen(13, 99) → true	true	✔
// loneTeen(21, 19) → true	true	✔
// loneTeen(13, 13) → false	false	✔
// loneTeen(14, 20) → true	true	✔
// loneTeen(20, 15) → true	true	✔
// loneTeen(16, 17) → false	false	✔
// loneTeen(16, 9) → true	true	✔
// loneTeen(16, 18) → false	false	✔
// loneTeen(13, 19) → false	false	✔
// loneTeen(13, 20) → true	true	✔
// loneTeen(6, 18) → true	true	✔
// loneTeen(99, 13) → true	true	✔
// loneTeen(99, 99) → false	false	✔
