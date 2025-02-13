function in3050(a, b) {
  if (
    (a >= 30 && a <= 40 && b >= 30 && b <= 40) ||
    (a >= 40 && a <= 50 && b >= 40 && b <= 50)
  )
    return true;
  else return false;
}

// Problem desc:
// Given 2 int values, return true if they are both in the range 30..40
//  inclusive, or they are both in the range 40..50 inclusive.

// Data to test
// in3050(30, 31) → true	true	✔
// in3050(30, 41) → false	false	✔
// in3050(40, 50) → true	true	✔
// in3050(40, 51) → false	false	✔
// in3050(39, 50) → false	false	✔
// in3050(50, 39) → false	false	✔
// in3050(40, 39) → true	true	✔
// in3050(49, 48) → true	true	✔
// in3050(50, 40) → true	true	✔
// in3050(50, 51) → false	false	✔
// in3050(35, 36) → true	true	✔
// in3050(35, 45) → false	false	✔
